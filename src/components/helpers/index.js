
const formatDate = objDate => {
    const date = new Date(objDate.second * 1000);
    const time = `${date.getHours()}:${date.getMinutes()}`;
    const options = {
        month: 'long',
        day: '2-digit',
        year: 'numeric'
    }
    const newDate = date.toLocaleDateString('es-ES', options);
    return newDate + ' - ' + time;
}   

export { formatDate };