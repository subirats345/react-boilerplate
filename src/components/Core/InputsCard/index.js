const InputsCard = ({ children, title }) => {
  return (
    <div className="card w-96 md:w-2/3 lg:w-2/4 xl:w-2/6 bg-base-300 shadow-xl">
      <div className="card-body">
        <h2 className="card-title mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default InputsCard;
