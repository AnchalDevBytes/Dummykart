const Button = ({text, clicFun}) => {
    return (
        <button onClick={clicFun} className="bg-green-800 text-white rounded-lg hover:bg-green-600 px-10 py-3 active:bg-teal-600">
            {text}
        </button>
    );
}

export default Button;