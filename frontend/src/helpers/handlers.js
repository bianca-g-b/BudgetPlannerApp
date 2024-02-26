// Handlers for input fields in budget forms
export function handleInputFocus(e, {theme}) {
    if (theme === 'dark') {
        e.target.style.boxShadow = ' 0 0 0 0.25rem rgba(32, 142, 201, 0.09)';
    } else {
        e.target.style.boxShadow = '0 0 0 0.25rem rgb(32 201 151 / 9%)';
    }
}
   
export function handleInputBlur(e) {
    e.target.style.boxShadow = 'none';
}

  