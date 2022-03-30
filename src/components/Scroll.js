const Scroll = (props) => {
    return (
        <div style={{padding: '12px', border: '3px solid #000', height: '800px', overflowY: 'scroll', boxShadow:  'inset 0px 0px 14px 0px #000'}}>
            {props.children}
        </div>
    )
}

export default Scroll