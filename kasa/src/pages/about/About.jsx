import React from 'react';
import Banner from '../../components/Banner/Banner';
import aboutBackgroundImage from '../../assets/aboutBackground.jpg';
import Collapse from '../../components/Collapse/Collapse';


export default function Property() {
  return (
    <main>
      <Banner type="about" title="" backgroundImage={aboutBackgroundImage} />
      <div className="Collapse-container">
        <Collapse title="Fiabilité">
          <p className="collapse-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere, nisi vitae cursus ultricies, leo lorem eleifend magna, nec aliquam arcu justo ac lectus. Aliquam id odio et nisi cursus accumsan.
          </p>
        </Collapse>
        <Collapse title="Respect">
          <p className="collapse-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere, nisi vitae cursus ultricies, leo lorem eleifend magna, nec aliquam arcu justo ac lectus. Aliquam id odio et nisi cursus accumsan.
          </p>
        </Collapse>
        <Collapse title="Service">
          <p className="collapse-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere, nisi vitae cursus ultricies, leo lorem eleifend magna, nec aliquam arcu justo ac lectus. Aliquam id odio et nisi cursus accumsan.
          </p>
        </Collapse>
        <Collapse title="Sécurité">
          <p className="collapse-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere, nisi vitae cursus ultricies, leo lorem eleifend magna, nec aliquam arcu justo ac lectus. Aliquam id odio et nisi cursus accumsan.
          </p>
        </Collapse>
      </div>
      
    </main>
  );
}
