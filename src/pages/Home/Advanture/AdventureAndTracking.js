import React from "react";
import { Carousel } from "react-bootstrap";
import "./AdventureAndTracking.css"

const AdventureAndTracking = () => {
  return (
    <div>
      <h2 className="common-header">Adventure and Hill Tracking </h2>

      <div className="row m-2">
        <div className="col-md-6 sm-12 col-12">
          <div className="m-1">
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/yBFHXbq/caro-1.png"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Tracking with Wild</h3>
                  <p>
                   Need to Explore wild adventure
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/Mg8FWqj/caro-2.png"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>adventure everest disney world</h3>
                  <p>
                  Expedition Everest Will CLOSE for a Lengthy Refurbishment in Disney World.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/CWg3Hv4/caro-4.png"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Going to High hill with high hopes</h3>
                  <p>
                    Everyone Need to more adventure for happiness, we believed tour and adventure activities key of happiness.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className="col-md-6 sm-12 col-12">
          <div className="m-1">
              <p className="adv-article"><b >Adventure can mean many things to many people, but sadly, Bangladesh is not the likeliest name to pop up at the mention of adventure travel. Yet, it is not true that there is no potential for such travel and experiences here. There is large scope for its development as a niche sector in the country, especially if trends on social media forums are to be believed. Our organization trying to improve this sector , Happy Holiday Tourism team work for that. The mostly untapped resources for adventure travel here lie in the unspoiled bits of nature in the flatlands, the huge meandering waterways, the verdant hills in the southeast, the various remote villages all over the country, and the numerous varying ecosystems, the char regions. Even many of the so-thought mundane things for many of us, like fishing in the river, staying in a mud/bamboo house and experiencing the simple village life, can actually be quite adventurous to city dwellers uninitiated to rural life. Adventure travel is typically suitable for the young and fit, as the inherent activities require a certain level of physical exertion, which many us do not possess at a more advanced age. And as Bangladesh has a large young cohort, with many being aficionados of the unexplored, it is a sector primed for the tapping. Hard adventures, on the other hand, often demand strenuous training and come with a heavy dose of adrenaline, with the extra risk! For example, mountaineering, swimming the various ocean channels, rock climbing, etc.</b></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventureAndTracking;
