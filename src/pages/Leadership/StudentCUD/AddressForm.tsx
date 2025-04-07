import React from 'react';
import Input from '../../../components/Input';
import { DropdownOption } from '../../../components/Dropdown/type';
import Dropdown from '../../../components/Dropdown';

interface formProps {
  register?: any;
  errors?: any;
  watch?: any;
  setValue?: any;
  clearError?: any;

  provineces: DropdownOption[];
  selectedProvince: DropdownOption | null;
  districts: DropdownOption[];
  selectedDistrict: DropdownOption | null;
  wards: DropdownOption[];
}

const AddressForm: React.FC<formProps> = ({
  register,
  errors,
  setValue,
  watch,
  clearError,
  provineces,
  selectedProvince,
  districts,
  selectedDistrict,
  wards,
}) => {
  return (
    <div className="w-full flex justify-between">
      <div className="w-[47%]">
        <div className="w-full flex items-center mb-1">
          <p className="w-[118px]">Tỉnh/Thành phố</p>
          <Dropdown
            size="medium"
            options={provineces}
            placeholder="Chọn tỉnh/thành phố"
            selectedOption={watch('province')}
            handleOptionClick={(e) => {
              setValue('province', e);
              clearError('province');
            }}
            {...register('province', { required: 'Vui lòng chọn tỉnh/thành phố !' })}
            borderColor={errors?.province && '#EF4444'}
          />
        </div>
        {errors && <p className="pb-0 ps-[118px] text-red-500 text-sm mt-1 mb-2">{errors?.province?.message}</p>}
        <div className="w-full flex items-center mb-1">
          <p className="w-[118px]">Quận/Huyện</p>
          <Dropdown
            size="medium"
            options={districts}
            placeholder="Chọn huyện/quận"
            selectedOption={watch('district')}
            handleOptionClick={(e) => {
              setValue('district', e);
              clearError('district');
            }}
            {...register('district', { required: 'Vui lòng chọn huyện/quận !' })}
            disabled={!selectedProvince}
            borderColor={errors?.district && '#EF4444'}
          />
        </div>
        {errors && <p className="pb-0 ps-[118px] text-red-500 text-sm mt-1 mb-2">{errors?.district?.message}</p>}
        <div className="w-full flex items-center mb-1">
          <p className="w-[118px]">Xã/phường</p>
          <Dropdown
            size="medium"
            options={wards}
            placeholder="Chọn xã/phường"
            selectedOption={watch('ward')}
            handleOptionClick={(e) => {
              setValue('ward', e);
              clearError('ward');
            }}
            {...register('ward', { required: 'Vui lòng chọn xã/phường !' })}
            disabled={!selectedDistrict}
            borderColor={errors?.ward && '#EF4444'}
          />
        </div>
        {errors && <p className="pb-0 ps-[118px] text-red-500 text-sm mt-1 mb-2">{errors?.ward?.message}</p>}
      </div>
      <div className="w-[47%]">
        <div className="w-full flex items-center mb-3">
          <p className="w-[118px]">Địa chỉ</p>
          <Input
            className="max-h-[40px] min-w-[300px]"
            placeholder="Nhập địa chỉ chi tiết"
            {...register('addressDetail', { required: 'Địa chỉ chi tiết không được bỏ trống !' })}
            onChange={(e) => {
              setValue('addressDetail', e.currentTarget.value);
              clearError('addressDetail');
            }}
            error={errors?.addressDetail?.message}
          />
        </div>
        <div className="w-full flex items-center mb-3">
          <p className="w-[118px]">Email</p>
          <Input
            className="max-h-[40px] min-w-[300px]"
            placeholder="Nhập email"
            {...register('email', { required: 'Email không được bỏ trống !' })}
            onChange={(e) => {
              setValue('email', e.currentTarget.value);
              clearError('email');
            }}
            error={errors?.email?.message}
          />
        </div>
        <div className="w-full flex items-center mb-3">
          <p className="w-[118px]">Điện thoại</p>
          <Input
            className="max-h-[40px] min-w-[300px]"
            placeholder="Nhập số điện thoại"
            {...register('phone', { required: 'Họ và tên không được bỏ trống !' })}
            onChange={(e) => {
              setValue('phone', e.currentTarget.value);
              clearError('phone');
            }}
            error={errors?.phone?.message}
          />
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
