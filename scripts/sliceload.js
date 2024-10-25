(() => {
    const slices = document.getElementsByTagName('slice');
    [].forEach.call(slices, i => {
        let filePath = i.getAttribute('src');
        $(i).load(filePath);
    });
})();