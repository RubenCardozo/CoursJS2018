window.onresize=function(){
    if (matchMedia("(max-width:800px)").matches) {
        console.clear();
        console.log('definition interieur a 800px');
    }else{
        console.clear();
        console.log('definition superieur a 800px');
    }
};
