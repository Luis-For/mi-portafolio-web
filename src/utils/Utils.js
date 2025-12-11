export function utils(){
    function zoom(element) {
        if (element) {
            element.style.transition = "transform 0.2s ease";
            element.style.transform = 'scale(1.2)';
        }
    }
    function norm(element) {
        if (element) {
            element.style.transition = "transform 0.1s ease";
            element.style.transform = 'scale(1)';
        }
    }

    return{
        zoom,
        norm
    };
}