import { Checkbox } from '@/components/ui/checkbox';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { ControllerRenderProps } from 'react-hook-form';
import { Control } from 'react-hook-form';
import { Layout } from '../ui/layout';
import { signUpIntroDataType } from '@/types/ResponseTypes';

const handleCheckedChange = (
  field: ControllerRenderProps<{ items: string[] }, 'items'>,
  item: { id: string; label: string },
  checked: boolean | 'indeterminate'
) => {
  let newValue;

  if (item.id === 'option') {
    newValue = checked
      ? [...field.value, item.id, 'option_1', 'option_2']
      : field.value.filter(
          (value) =>
            value !== item.id && value !== 'option_1' && value !== 'option_2'
        );
  } else if (item.id === 'option_1' || item.id === 'option_2') {
    newValue = checked
      ? [...field.value, item.id]
      : field.value.filter((value) => value !== item.id);

    if (
      !checked &&
      !field.value.includes(item.id === 'option_1' ? 'option_2' : 'option_1')
    ) {
      newValue = newValue.filter((value) => value !== 'option');
    } else if (checked && !field.value.includes('option')) {
      newValue.push('option');
    }
  } else {
    newValue = checked
      ? [...field.value, item.id]
      : field.value.filter((value) => value !== item.id);
  }

  field.onChange(newValue);
};

interface SignUpData {
  items: string[];
}

interface SignUpIntroFieldProps {
  control: Control<SignUpData>;
  items: signUpIntroDataType[];
}

function SignUpIntroField({ control, items }: SignUpIntroFieldProps) {
  return (
    <FormField
      control={control}
      name="items"
      render={({ field }) => (
        <>
          <FormItem>
            <Layout variant="signUpCheckbox">
              <FormControl>
                <Checkbox
                  checked={
                    items
                      ? items.every((item) => field.value?.includes(item.id))
                      : false
                  }
                  onCheckedChange={(checked) => {
                    if (checked) {
                      field.onChange(items ? items.map((item) => item.id) : []);
                    } else {
                      field.onChange([]);
                    }
                  }}
                />
              </FormControl>
              <FormLabel className="ml-2 font-bold text-md">
                약관 전체동의
              </FormLabel>
            </Layout>
          </FormItem>
          <Layout variant="signUpCheckbox">
            {items &&
              items.map((item) => (
                <FormItem
                  key={item.id}
                  className={`flex flex-row space-x-3 -space-y-1 p-1 gap-1 ${item.id.startsWith('option_') ? 'ml-4' : ''}`}
                >
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes(item.id)}
                      onCheckedChange={(checked) => {
                        handleCheckedChange(field, item, checked);
                      }}
                      disabled={
                        !field.value?.includes('option') &&
                        (item.id === 'option_1' || item.id === 'option_2')
                      }
                    />
                  </FormControl>
                  <FormLabel className="font-bold text-md">
                    {item.label}
                  </FormLabel>
                </FormItem>
              ))}
          </Layout>
          <FormMessage />
        </>
      )}
    />
  );
}

export default SignUpIntroField;
