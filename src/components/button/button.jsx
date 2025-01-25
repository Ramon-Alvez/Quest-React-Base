const showBtnLabel = (label) => {
    alert(`A label desse botão é ${label}`)
}

const Button = ({label}) => {
    return (
        <button label={label} onClick={() => showBtnLabel(label)}>{label}</button>
    )
}



Button.defaultProps = {
    label: 'Baixar CV'
}

export default Button