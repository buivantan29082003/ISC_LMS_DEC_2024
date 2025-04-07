import React, { useContext, useEffect, useState } from 'react';
import './main.css';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import logo2 from '../../../assets/images/logo2.png';
import { Navigate, useNavigate } from 'react-router';
import { ChevronLeftIcon, EyeIcon, EyeSlashIcon, ShieldExclamationIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { useForm } from 'react-hook-form';
import createAxiosInstance from '../../../utils/axiosInstance';
import { useCookies } from 'react-cookie';
import Loading from '../../../components/Loading';
import { AuthContext } from './AuthContext';
import { toast } from 'react-toastify';
import { serviceChangePassword, serviceLogin } from './services';

interface studentLoginProps {
  isLogin: boolean;
  isChangePassword?: boolean;
}

const Login: React.FC<studentLoginProps> = ({ isLogin, isChangePassword }) => {
  const navigator = useNavigate();

  const {
    register,
    trigger,
    formState: { errors },
    getValues,
    setError,
    clearErrors,
  } = useForm();

  const axiosInstance = createAxiosInstance(false);

  const [cookies, setCookies] = useCookies(['accessToken', 'refreshToken']);

  const [isLoading, setLoading] = useState(false);

  const [info, setInfo] = useState<{ user: any }>({ user: '' });

  const { setRole } = useContext(AuthContext);

  const handleLogin = async () => {
    clearErrors('loginFailed');
    setLoading(true);
    const isValid = await trigger(['email', 'password']);
    if (!isValid) {
      setLoading(false);
      return;
    }
    const data = getValues();
    try {
      const response = await axiosInstance.post('api/auth/login', data);
      const info = response.data?.data; // lưu thông tin vào biến info
      setInfo(info);
      console.log(info);

      setCookies('accessToken', info?.accessToken, { maxAge: 60 * 15, path: '/' });
      setCookies('refreshToken', info?.refreshToken?.token, { maxAge: 60 * 60 * 10, path: '/' });

      // Xử lý role ngay ở đây
      if (info?.user?.role === 'ADMIN') {
        setRole(1);
        navigator('/leadership');
      } else if (info?.user?.role === 'TEACHER') {
        setRole(2);
        navigator('/teacher');
      } else if (info?.user?.role === 'STUDENT') {
        setRole(3);
        navigator('/student');
      } else {
        navigator('/login');
      }
    } catch (error) {
      toast.error('Đăng nhập không thành công !');
      setError('loginFailed', { message: 'Tài khoản hoặc mật khẩu không đúng !' });
      console.log('Lỗi khi đăng nhập!', error);
    } finally {
      setLoading(false);

    serviceLogin({
      isValid: isValid,
      data: data,
      axiosInstance: axiosInstance,
      clearErrors: clearErrors,
      navigator: navigator,
      setCookies: setCookies,
      setError: setError,
      setInfo: setInfo,
      setLoading: setLoading,
      setRole: setRole,
    });
  };
  }

  const [isShowPassword, setShowPassword] = useState(false);

  const handleChangePassword = async () => {
    const isValid = await trigger(['currentPassword', 'newPassword']);

    if (isValid) {
      const data = getValues();
      console.log(data);
      
      serviceChangePassword({
        isValid: isValid,
        data: data,
        axiosInstance: axiosInstance,
        clearErrors: clearErrors,
        navigator: navigator,
        setCookies: setCookies,
        setError: setError,
        setInfo: setInfo,
        setLoading: setLoading,
        setRole: setRole,
      });
    }
  };

  return (
    <div className="student-login-container">
      <Loading isLoading={isLoading} />
      <img src={logo2} alt="logo" />
      <div className="w-full h-full flex justify-end items-center">
        <div className="login-box px-5">
          <p className="text-4xl font-bold">{isLogin ? 'Đăng Nhập' : isChangePassword ? 'Đổi mật khẩu' : 'Cấp lại mật khẩu'}</p>
          <div className="mt-10 w-5/6 text-start">
            {isChangePassword ? (
              <div>
                <p className="mb-1 pb-0">Mật khẩu hiện tại</p>
                <Input
                  type={isShowPassword ? 'text' : 'password'}
                  icon={
                    <div className="w-full h-full flex justify-center">
                      <ShieldExclamationIcon className="w-full h-full p-3" />
                    </div>
                  }
                  placeholder="Nhập mật khẩu hiện tại"
                  {...register('currentPassword', { required: 'Mật khẩu hiện tại không được bỏ trống !' })}
                  error={errors.currentPassword?.message as string}
                  leftIcon={
                    <button className="w-full h-full flex justify-center" onClick={() => setShowPassword(!isShowPassword)}>
                      {isShowPassword ? <EyeSlashIcon className="w-full h-full p-3" /> : <EyeIcon className="w-full h-full p-3" />}
                    </button>
                  }
                />
              </div>
            ) : (
              <div>
                <p className="mb-1 pb-0">Email</p>
                <Input
                  icon={
                    <div className="w-full h-full flex justify-center">
                      <UserCircleIcon className="w-full h-full p-3" />
                    </div>
                  }
                  placeholder="Nhập email"
                  {...register('email', { required: 'Email không được bỏ trống !' })}
                  error={errors.email?.message as string}
                />
              </div>
            )}
          </div>
          <div className="mt-5 w-5/6 text-start">
            {isLogin ? (
              <div>
                <p className="mb-1 pb-0">Mật khẩu</p>
                <Input
                  type={isShowPassword ? 'text' : 'password'}
                  icon={
                    <div className="w-full h-full flex justify-center">
                      <ShieldExclamationIcon className="w-full h-full p-3" />
                    </div>
                  }
                  placeholder="Nhập mật khẩu"
                  {...register('password', { required: 'Mật khẩu không được bỏ trống !' })}
                  error={errors.password?.message as string}
                  leftIcon={
                    <button className="w-full h-full flex justify-center" onClick={() => setShowPassword(!isShowPassword)}>
                      {isShowPassword ? <EyeSlashIcon className="w-full h-full p-3" /> : <EyeIcon className="w-full h-full p-3" />}
                    </button>
                  }
                />
              </div>
            ) : isChangePassword ? (
              <div>
                <p className="mb-1 pb-0">Mật khẩu mới</p>
                <Input
                  type={isShowPassword ? 'text' : 'password'}
                  icon={
                    <div className="w-full h-full flex justify-center">
                      <ShieldExclamationIcon className="w-full h-full p-3" />
                    </div>
                  }
                  placeholder="Nhập mật khẩu mới"
                  {...register('newPassword', { required: 'Mật khẩu mới không được bỏ trống !' })}
                  error={errors.newPassword?.message as string}
                  leftIcon={
                    <button className="w-full h-full flex justify-center" onClick={() => setShowPassword(!isShowPassword)}>
                      {isShowPassword ? <EyeSlashIcon className="w-full h-full p-3" /> : <EyeIcon className="w-full h-full p-3" />}
                    </button>
                  }
                />
              </div>
            ) : (
              <div>
                <p className="mb-1 pb-0">Mã xác nhận</p>
                <div className="flex items-center">
                  <Input placeholder="Nhập mã xác nhận" />
                  <button className="bg-[#FF7506] ms-2 px-2 py-1 text-white rounded rounded-3">Gửi mã</button>
                </div>
              </div>
            )}
          </div>
          {errors && <p className="pb-0 w-5/6 text-red-500 text-sm mt-1 font-bold">{errors?.loginFailed?.message as string}</p>}
          <div className="mt-5 text-end w-5/6 text-orange-text mb-5">
            {isLogin ? (
              <span>
                <button
                  onClick={() => {
                    navigator('/reset');
                  }}
                >
                  Quên mật khẩu?
                </button>
              </span>
            ) : isChangePassword ? (
              <span className="flex items-center justify-end">
                <div className="w-[20px] h-[20px]">
                  <ChevronLeftIcon />
                </div>
                <button
                  onClick={() => {
                    navigator('/');
                  }}
                >{`Quay lại trang chủ`}</button>
              </span>
            ) : (
              <span className="flex items-center justify-end">
                <div className="w-[20px] h-[20px]">
                  <ChevronLeftIcon />
                </div>
                <button
                  onClick={() => {
                    navigator('/login');
                  }}
                >{`Quay lại đăng nhập`}</button>
              </span>
            )}
          </div>
          <Button
            className="primary"
            style={{ fontWeight: 'bold' }}
            children={isLogin ? 'Đăng nhập' : isChangePassword ? 'Đổi mật khẩu' : 'Cấp lại mật khẩu'}
            onClick={isLogin ? handleLogin : isChangePassword ? handleChangePassword : undefined}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
