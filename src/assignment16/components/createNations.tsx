import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoryState, NationsState } from '../atoms';

interface IForm {
  nation: string;
}

function CreateNation() {
  const setNations = useSetRecoilState(NationsState);
  const category = useRecoilValue(categoryState);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForm>();
  const onValid = ({ nation }: IForm) => {
    setNations((prev) => [
      { id: Date.now(), name: nation, category },
      ...prev,
    ]);
    setValue('nation', '');
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register('nation', {
          required: '😖 required!',
        })}
        placeholder='나라이름'
      />
      <p>{errors?.nation?.message}</p>
      <button>가즈아!</button>
    </form>
  );
}

export default CreateNation;
