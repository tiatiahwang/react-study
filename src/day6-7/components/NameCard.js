import { Link } from 'react-router-dom';

const NameCard = ({ character }) => {
  return (
    <div className='group h-[300px] w-[260px] [perspective:1000px] cursor-pointer'>
      <Link to={`/character/${character.id}`}>
        <div className='relative h-full w-full round-md shadow-md transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
          <div className='absolute inset-0'>
            <img
              className='h-full w-full rounded-md object-fill shadow-md shadow-black/40'
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
          </div>
          <div className='absolute inset-0 h-full w-full rounded-md bg-black/50 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
            <div className='flex min-h-full flex-col items-center justify-center'>
              <h3 className='text-4xl font-bold leading-tight'>
                {character.name}
              </h3>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NameCard;
