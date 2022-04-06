const InputsCard = ({ children, title }) => {
  return (
    <div className="card w-96 md:w-2/3 lg:w-2/4 xl:w-2/5 bg-base-100 shadow-xl mt-20 md:mt-20">
      <div className="card-body">
        <h2 className="card-title mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default InputsCard;
