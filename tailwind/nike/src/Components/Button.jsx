const Button = ({ label, iconUrl }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-8 py-4 font-montserrat border border-coral-red bg-coral-red rounded-full text-white">
      {label}

      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow right"
          className="ml-2 rounded-full bg-white w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
