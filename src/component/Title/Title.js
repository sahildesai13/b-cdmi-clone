function Title(props) {
    return(
        <div className="my-5 pt-5">
            <h6 className="" class={props.class}>{props.SubName}</h6>
            <h2 className="fw-bolder" class={props.class}>{props.Name}</h2>
        </div>
    );
}
export default Title;