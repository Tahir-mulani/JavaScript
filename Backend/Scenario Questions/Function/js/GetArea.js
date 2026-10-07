function calculateRectangleArea(length,width){
    this.length = length;
    this.width = width;

    let result = length*width;

    console.log("Area of Rectangle "+result);
}
calculateRectangleArea(10,20);