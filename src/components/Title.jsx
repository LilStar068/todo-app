const Title = (props) => {
    return (
        <h1 {...props} className="text-2xl font-raleway font-bold">
            {props.children}
        </h1>
    );
};
export default Title;
