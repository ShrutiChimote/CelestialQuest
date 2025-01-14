# CelestialQuest

**CelestialQuest** is an educational astronomical website that brings the wonders of space to users through real-time NASA data, captivating visuals, and information on celestial phenomena, space missions, and Mars rover explorations. Built with HTML, CSS, and JavaScript, CelestialQuest is fully responsive and provides a seamless experience across devices.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Pages](#pages)
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## Project Overview
CelestialQuest is designed to educate and inspire users with a visual and interactive experience of space. By leveraging the NASA Open API, the website delivers fresh and real-time content, including the Astronomy Picture of the Day and imagery from Mars rover missions.

## Features
- **NASA Astronomy Picture of the Day (APOD)**: Displays a daily updated image with an accompanying description from NASA's APOD API.
- **Explore Page**: Features Mars rover images from different camera perspectives, including Mast, ChemCam, and FHaz.
- **Cosmic Images**: A gallery of random space images to inspire curiosity and wonder.
- **Space Missions Page**: A video of a satellite orbiting Earth, providing users with a glimpse into real-life space missions.

## Technologies Used
- **HTML5**: Provides the structure of the website with semantic markup for accessibility.
- **CSS3**: Ensures a visually appealing and responsive layout across devices.
- **JavaScript**: Adds interactivity and manages real-time content updates via the NASA API.
- **NASA Open API**: Retrieves live data, including images and information on space missions and astronomy events.

## Installation
To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/CelestialQuest.git
   ```
2. Open the project folder:
   ```bash
   cd CelestialQuest
   ```
3. Open `index.html` in your web browser.

## Usage
CelestialQuest is designed to be intuitive and straightforward:
1. **Home**: View the Astronomy Picture of the Day and a space-themed video for an engaging start.
2. **Explore**: Discover images and details from NASA's Mars rover, including images captured by Mast, ChemCam, and FHaz cameras.
3. **Cosmic Images**: Browse a collection of stunning cosmic visuals.
4. **Space Missions**: Watch a video of Earth from space, giving a view of satellite missions in action.

## API Integration
CelestialQuest uses the **NASA Open API** to dynamically load images and data. You can obtain your own API key [here](https://api.nasa.gov/) and replace the placeholder in the JavaScript file:
   ```javascript
   const apiKey = 'YOUR_API_KEY';
   ```

## Pages
1. **Home**: Features a video of space and the Astronomy Picture of the Day.
2. **Explore**: Provides images and information about NASA’s Mars rover and its cameras.
3. **Cosmic Images**: Displays a gallery of random cosmic images.
4. **Space Missions**: Shows a video of a satellite orbiting Earth.

## Screenshots
### Home Page
![Screenshot 2024-11-11 030144](https://github.com/user-attachments/assets/17ec901d-d748-4f60-839c-0bc9695b5a79)

### Explore Page
![Screenshot 2024-11-11 030304](https://github.com/user-attachments/assets/2e09a245-ae2a-41a4-a3d5-d0995be564af)
![Screenshot 2024-11-11 030321](https://github.com/user-attachments/assets/b190a04f-dde5-4fd1-b501-3c58211a902b)

### Cosmic Images
![Screenshot 2024-11-15 093519](https://github.com/user-attachments/assets/fc93a9de-0ae0-4fb5-bd9a-2f37e046482d)

### Space Missions
![Screenshot 2024-11-11 030934](https://github.com/user-attachments/assets/cc780c6f-eb11-4f7a-8130-edc1178103ad)


## Future Enhancements
- **Additional Rover Data**: Incorporate more Mars rover missions and images.
- **User Interaction**: Allow users to search for specific celestial objects or missions.
- **Interactive Solar System**: Add a 3D model of the solar system for educational purposes.
- **Astronomical Events Calendar**: Display upcoming celestial events (e.g., meteor showers, eclipses).

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests to help improve CelestialQuest. Please follow the standard coding style and include comments where necessary.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
