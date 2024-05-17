import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import aboutBackgroundImage from '../../assets/aboutBackground.jpg';
import Collapse from '../../components/Collapse/Collapse';
import { getAboutPageData } from '../../service/Api';


export default function About() {
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAboutPageData();
        setAboutData(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données de la page About :', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <Banner type="about" title="" backgroundImage={aboutBackgroundImage} />
      <div className="Collapse-container">
        {aboutData.map(item => (
          <Collapse key={item.id} title={item.title}>
            <p className="collapse-text">{item.content}</p>
          </Collapse>
        ))}
      </div>
    </main>
  );
}
