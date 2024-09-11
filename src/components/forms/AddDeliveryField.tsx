'use client';

import { useState } from 'react';
import SignInInput from '../pages/auth/sign-in/SignInInput';
import { Button } from '../ui/button';
import { Address } from 'react-daum-postcode';
import PostModal from '../pages/main/mypage/delivery/add/PostModal';
import { DeliveryMessage } from '../pages/main/mypage/delivery/add/DeliveryMessage';
import { AddDeliveryFormType } from '@/types/main/deliveryType';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';

function AddDeliveryField() {
  const [inputValues, setInputValues] = useState<AddDeliveryFormType>({
    nickname: '',
    name: '',
    postNumber: '',
    basicAddress: '',
    detailAddress: '',
    phone1: '',
    phone2: '',
    message: '',
    customMessage: '',
    isBase: false,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClear = (name: keyof AddDeliveryFormType) => {
    setInputValues((prev) => ({ ...prev, [name]: '' }));
  };

  const handleChange =
    (name: keyof AddDeliveryFormType) => (value: string | boolean) => {
      const updatedValues = {
        ...inputValues,
        [name]: value,
      };
      setInputValues(updatedValues);
    };

  const handleAddressSearch = () => {
    setIsModalOpen(true);
  };

  const handleComplete = (data: Address) => {
    console.log(data);
    setInputValues((prev) => ({
      ...prev,
      postNumber: data.zonecode,
      basicAddress: data.address,
      detailAddress: data.buildingName || '',
    }));
    setIsModalOpen(false);
  };

  return (
    <>
      <SignInInput
        signInInput={{
          text: '주소별칭',
          value: inputValues.nickname,
          name: 'nickname',
          setValue: (value) => handleChange('nickname')(value),
          clearValue: () => handleClear('nickname'),
          required: false,
        }}
      />
      <SignInInput
        signInInput={{
          text: (
            <>
              받는 분 <span className="text-green-500 font-bold">*</span>
            </>
          ),
          value: inputValues.name,
          name: 'name',
          setValue: (value) => handleChange('name')(value),
          clearValue: () => handleClear('name'),
        }}
      />
      <div className="grid grid-cols-4">
        <span className="col-span-3">
          <SignInInput
            signInInput={{
              text: (
                <>
                  우편번호 <span className="text-green-500 font-bold">*</span>
                </>
              ),
              value: inputValues.postNumber,
              name: 'postNumber',
              setValue: (value) => handleChange('postNumber')(value),
              clearValue: () => null,
              disabled: true,
            }}
          />
        </span>
        <Button
          onClick={handleAddressSearch}
          className="col-span-1 rounded-full"
        >
          주소검색
        </Button>
      </div>
      <SignInInput
        signInInput={{
          text: (
            <>
              기본주소 <span className="text-green-500 font-bold">*</span>
            </>
          ),
          value: inputValues.basicAddress,
          name: 'basicAddress',
          setValue: (value) => handleChange('basicAddress')(value),
          clearValue: () => null,
          disabled: true,
        }}
      />
      <SignInInput
        signInInput={{
          text: (
            <>
              상세주소 <span className="text-green-500 font-bold">*</span>
            </>
          ),
          value: inputValues.detailAddress,
          name: 'detailAddress',
          setValue: (value) => handleChange('detailAddress')(value),
          clearValue: () => handleClear('detailAddress'),
        }}
      />
      <SignInInput
        signInInput={{
          text: (
            <>
              연락처1 <span className="text-green-500 font-bold">*</span>
            </>
          ),
          value: inputValues.phone1,
          name: 'phone1',
          setValue: (value) => handleChange('phone1')(value),
          clearValue: () => handleClear('phone1'),
        }}
      />
      <SignInInput
        signInInput={{
          text: '연락처2',
          value: inputValues.phone2,
          name: 'phone2',
          setValue: (value) => handleChange('phone2')(value),
          clearValue: () => handleClear('phone2'),
          required: false,
        }}
      />
      <DeliveryMessage
        message={inputValues.message}
        customMessage={inputValues.customMessage}
        setValue={handleChange}
      />
      <div className={'flex items-center space-x-2 p-1 gap-1'}>
        <Checkbox
          variant="medium"
          id="isBase"
          name="isBase"
          checked={inputValues.isBase}
          onCheckedChange={(checked) => handleChange('isBase')(checked)}
        />
        <Label htmlFor="isBase" className="text-md">
          기본 배송지로 저장합니다.
        </Label>
      </div>
      {isModalOpen && <PostModal handleComplete={handleComplete} />}
    </>
  );
}

export default AddDeliveryField;
