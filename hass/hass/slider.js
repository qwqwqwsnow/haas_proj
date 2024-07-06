function toggleSwitch(switchElement) {
    const slider = switchElement.querySelector('.slider');
    if (slider.classList.contains('active')) {
        slider.classList.remove('active');
        switchElement.classList.remove('active');
    } else {
        slider.classList.add('active');
        switchElement.classList.add('active');
    }
}
