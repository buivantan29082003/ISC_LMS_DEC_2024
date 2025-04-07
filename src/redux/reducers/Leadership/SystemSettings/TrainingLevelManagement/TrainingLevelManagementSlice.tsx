import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

const API_URL = 'https://fivefood.shop/api/education-levels';

// Định nghĩa kiểu dữ liệu cho trình độ đào tạo
interface TrainingLevel {
  id: any; // thêm id để phân biệt các bản ghi
  name: string;
  trainingType: string;
  isAnnualSystem: boolean;
  trainingDuration?: number;
  semesterPerYear?: number;
  isCredit: boolean;
  mandatoryCourse?: number;
  electiveCourse?: number;
  status: boolean;
  description?: string;
}

// Định nghĩa kiểu dữ liệu của API response
interface TrainingLevelResponse {
  code: number;
  message: string;
  data: TrainingLevel[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

// Kiểu dữ liệu của state, lưu trữ 1 đối tượng TrainingLevelResponse
interface TrainingLevelState {
  TrainingLevelManagement: TrainingLevelResponse | null;
  loading: boolean;
  error: string | null;
}

// Khởi tạo state ban đầu
const initialState: TrainingLevelState = {
  TrainingLevelManagement: null,
  loading: false,
  error: null,
};

// Thunk lấy danh sách trình độ đào tạo
export const fetchTrainingLevels = createAsyncThunk(
  'trainingLevelManagement/fetchTrainingLevels',
  async ({ page, pageSize, sortColumn, sortOrder }: { page: number; pageSize: number; sortColumn: string; sortOrder: string }) => {
    const response = await fetch(`${API_URL}?page=${page}&pageSize=${pageSize}&sortColumn=${sortColumn}&sortOrder=${sortOrder}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
    }
    const data: TrainingLevelResponse = await response.json();
    // console.log('check data', data);
    return data;
  },
);

// Thunk thêm mới trình độ đào tạo
export const postTrainingLevel = createAsyncThunk('trainingLevelManagement/postTrainingLevel', async (newTrainingLevel: TrainingLevel) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTrainingLevel),
  });

  if (!response.ok) {
    throw new Error(`Failed to create training level: ${response.status} ${response.statusText}`);
  }

  const data: TrainingLevel = await response.json();
  return data;
});

// Thunk xóa trình độ đào tạo
export const deleteTrainingLevel = createAsyncThunk('trainingLevelManagement/deleteTrainingLevel', async (id: number) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to delete training level: ${response.status} ${response.statusText}`);
  }

  return id; // Trả về id để reducer cập nhật state
});

const trainingLevelSlice = createSlice({
  name: 'trainingLevelManagement',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchTrainingLevels.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrainingLevels.fulfilled, (state, action: PayloadAction<TrainingLevelResponse>) => {
        state.loading = false;
        state.TrainingLevelManagement = action.payload;
      })
      .addCase(fetchTrainingLevels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Có lỗi xảy ra!';
      })
      // Post
      .addCase(postTrainingLevel.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postTrainingLevel.fulfilled, (state, action: PayloadAction<TrainingLevel>) => {
        state.loading = false;
        // Nếu state đã có dữ liệu, cập nhật thêm training level mới vào mảng data
        if (state.TrainingLevelManagement) {
          state.TrainingLevelManagement.data.push(action.payload);
        }
      })
      .addCase(postTrainingLevel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Có lỗi khi thêm mới!';
      })
      // Delete
      .addCase(deleteTrainingLevel.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTrainingLevel.fulfilled, (state, action: PayloadAction<number>) => {
        state.loading = false;
        // Cập nhật lại mảng data loại bỏ phần tử có id trùng với action.payload
        if (state.TrainingLevelManagement) {
          state.TrainingLevelManagement.data = state.TrainingLevelManagement.data.filter((trainingLevel) => trainingLevel.id !== action.payload);
        }
      })
      .addCase(deleteTrainingLevel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Có lỗi khi xóa!';
      });
  },
});

export default trainingLevelSlice.reducer;
