// Helper function to calculate the area of a rectangle
function calculateRectangleArea(length, width) {
    return length * width;
  }
  
  // Helper function to calculate the perimeter of a rectangle
  function calculateRectanglePerimeter(length, width) {
    return 2 * (length + width);
  }
  
  // Main function to use the helper functions
  function calculateRectangleProperties(length, width) {
    const area = calculateRectangleArea(length, width);
    const perimeter = calculateRectanglePerimeter(length, width);
  
    return {
      area: area,
      perimeter: perimeter,
    };
  }
  
  // Example usage
  const rectangleLength = 5;
  const rectangleWidth = 8;
  const rectangleProperties = calculateRectangleProperties(rectangleLength, rectangleWidth);
  
  console.log(`Rectangle Area: ${rectangleProperties.area}`);
  console.log(`Rectangle Perimeter: ${rectangleProperties.perimeter}`);