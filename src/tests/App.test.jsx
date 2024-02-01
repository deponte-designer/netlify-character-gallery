import { render } from '@testing-library/react';
import App from '../App';

describe('<App/> component', () => {

  it('renders', () => {
    render(<App />);
  });


  // it('renders CharacterGallery', () => {
  //   const { getByText } = render(<App />);
  //   const characterGalleryText = getByText('This is CharacterGallery components');
  //   expect(characterGalleryText).toBeInTheDocument();
  // });

});
