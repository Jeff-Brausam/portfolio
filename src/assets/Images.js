import MockupSm from './Mockup/MockupScreenshotSmall.jpg';
import MockupLg from './Mockup/MockupScreenshot.jpg';
import CalculatorSm from './Calculator/CalculatorScreenshotSmall.jpg';
import CalculatorLg from './Calculator/CalculatorScreenshot.jpg';
import weatherAppSm from './WeatherApp/WeatherAppScreenshotSmall.jpg';
import weatherAppLg from './WeatherApp/WeatherAppScreenshotSmall.jpg';
import ToDoListSm from './ToDoList/ToDoListScreenshotSmall.jpg';
import ToDoListLg from './ToDoList/ToDoListScreenshot.jpg';

const Images = {
  projects: {
    mockup: {
      alt: "Ecommerce Store Website",
      url: {
        small: MockupSm,
        medium: MockupSm,
        large: MockupLg
      }
    }, 
    calculator: {
      alt: "Calculator Application",
      url: {
        small: CalculatorSm,
        medium: CalculatorSm,
        large: CalculatorLg
      }
    },
    weatherApp: {
      alt: "Weather Application",
      url: {
        small: weatherAppSm,
        medium: weatherAppSm,
        large: weatherAppLg
      }
    },
  ToDoList: {
    alt: "Todo List Application",
    url: {
      small: ToDoListSm,
      medium: ToDoListSm,
      large: ToDoListLg
    }
  }
  },
}

export default Images;