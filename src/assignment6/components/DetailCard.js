const DetailCard = ({ data, title }) => {
  return (
    <div className='text-white'>
      <h3 className='text-xl font-bold pt-4 pb-2 border-b-[1px] border-white'>
        {title}
      </h3>
      <div className='pt-2'>
        {data.map((item) => (
          <p className='text-sm leading-normal'>
            {item.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default DetailCard;
