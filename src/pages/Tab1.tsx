import { IonAvatar, IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonRow, IonSelect, IonSelectOption, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { bagHandle, cafe, chevronForwardCircleOutline, musicalNotes, notifications } from 'ionicons/icons';
// import ExploreContainer from '../components/ExploreContainer';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';

import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader mode="ios">
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton color="primary">
              <IonImg class="logo" src="https://i.ibb.co/XDK1zsN/logo.png"></IonImg><span>Fastfin</span>
            </IonButton>
          </IonButtons>
          <IonTitle class="IonText-center ion-hide">Title</IonTitle>
          <IonButtons slot="end">
            <IonButton class="notification-btn">
              <IonIcon icon={notifications}></IonIcon>
              <IonBadge></IonBadge>
            </IonButton>
            <IonButton class="avatar">
              {/* <IonIcon icon={searchOutline}></IonIcon> */}
              <img src="https://cdn3d.iconscout.com/3d/premium/thumb/programmer-avatar-5966938-4936168.png" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonGrid class="ion-no-padding">
        <IonRow>
          <IonCol size="12">
            <div id="heroSlider">
              <Swiper className="mySwiper" modules={[Pagination]} slidesPerView={1.2} initialSlide={0} freeMode={true} cssMode={false}
                autoplay={false} centeredSlides={true} spaceBetween={18} keyboard={false} pagination={{ clickable: true }}
                scrollbar={false} zoom={false}
                breakpoints={{
                  640: 
                  {
                    slidesPerView: 1.2, spaceBetween: 32
                  }, 
                  768: 
                  { 
                    slidesPerView: 1.2, spaceBetween: 16
                  }, 
                  1024: 
                  { 
                    slidesPerView: 1.2, spaceBetween: 16 
                  }
                  }}>
                <SwiperSlide>
                  <IonCard class="card">
                    <IonCardHeader>
                      <IonImg src="https://i.ibb.co/LPbGWcf/visa.png"></IonImg>
                    </IonCardHeader>
                    <IonCardContent>

                      <IonLabel class="number">
                        <span>****</span>
                        <span>****</span>
                        <span>****</span>
                        <span>1234</span>
                      </IonLabel>
                      <IonText>
                        <h6>Card Holder Name</h6>
                        <h1>John Green</h1>
                      </IonText>
                      <IonText>
                        <h6>Expiry Date</h6>
                        <h1>06/27</h1>
                      </IonText>
                    </IonCardContent>
                  </IonCard>
                </SwiperSlide>
                <SwiperSlide>
                  <IonCard class="card">
                    <IonCardHeader>
                      <IonImg
                        src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-mastercard-logo-png-vector-download-19.png"></IonImg>
                    </IonCardHeader>
                    <IonCardContent>

                      <IonLabel class="number">
                        <span>****</span>
                        <span>****</span>
                        <span>****</span>
                        <span>7847</span>
                      </IonLabel>
                      <IonText>
                        <h6>Card Holder Name</h6>
                        <h1>Sidh Shedge</h1>
                      </IonText>
                      <IonText>
                        <h6>Expiry Date</h6>
                        <h1>06/27</h1>
                      </IonText>
                    </IonCardContent>
                  </IonCard>
                </SwiperSlide>
                <SwiperSlide>
                  <IonCard class="card">
                    <IonCardHeader>
                      <IonImg src="https://i.ibb.co/LPbGWcf/visa.png"></IonImg>
                    </IonCardHeader>
                    <IonCardContent>
                      <IonLabel class="number">
                        <span>****</span>
                        <span>****</span>
                        <span>****</span>
                        <span>1234</span>
                      </IonLabel>
                      <IonText>
                        <h6>Card Holder Name</h6>
                        <h1>John Green</h1>
                      </IonText>
                      <IonText>
                        <h6>Expiry Date</h6>
                        <h1>06/27</h1>
                      </IonText>
                    </IonCardContent>
                  </IonCard>
                </SwiperSlide>
              </Swiper>
            </div>
          </IonCol>
        </IonRow>
        <IonRow class="balance">
          <IonCol size="12">
            <IonCard>
              <IonCardContent class="ion-no-padding ion-padding-horizontal ion-padding-top">
                <IonItem>
                  <IonAvatar>
                    <img src="https://cdn-icons-png.flaticon.com/512/323/323310.png" />
                  </IonAvatar>
                  <IonSelect interface="action-sheet" placeholder="Currency" value="USD">
                    <IonSelectOption value="USD">USD</IonSelectOption>
                    <IonSelectOption value="INR">INR</IonSelectOption>
                  </IonSelect>
                  <IonLabel class="amt">15402.01</IonLabel>
                </IonItem>
                <IonItem lines="none">
                  <IonLabel>
                    <span className="details">IBAN</span>
                    <span>LT12</span>
                    <span>****</span>
                    <span>****</span>
                    <span>****</span>
                    <span>1010</span>
                  </IonLabel>
                  <IonIcon icon={chevronForwardCircleOutline}></IonIcon>
                </IonItem>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
        <IonRow class="quick-actions">
          <IonCol size="12">
            <IonLabel class="title">Quick Actions</IonLabel>
            <Swiper className="mySwiper" slidesPerView={3.4} initialSlide={1} freeMode={true} cssMode={false}
              autoplay={false} centeredSlides={true} spaceBetween={10} keyboard={false} pagination={false}
              scrollbar={false} zoom={false} loop={false}
              breakpoints={{ 
                640: 
                { 
                  slidesPerView: 3.4, spaceBetween: 14 
                },
                768:
                { 
                  slidesPerView: 3.4, spaceBetween: 14 
                },
                1024: 
                { 
                  slidesPerView: 3.4, spaceBetween: 14
                } 
                }}>
              <SwiperSlide>
                <div className="card">
                  <img src="https://cdn3d.iconscout.com/3d/premium/thumb/dollar-coin-6433222-5526059.png" />
                  <IonLabel>Send Funds</IonLabel>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <img src="https://cdn3d.iconscout.com/3d/premium/thumb/people-2872338-2389554.png" />
                  <IonLabel>Browse People</IonLabel>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <img src="https://cdn3d.iconscout.com/3d/premium/thumb/pie-chart-6799278-5600651.png" />
                  <IonLabel>Get Reports</IonLabel>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <img src="https://cdn3d.iconscout.com/3d/premium/thumb/promotion-6684140-5523033.png" />
                  <IonLabel>Refer</IonLabel>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <img src="https://cdn3d.iconscout.com/3d/premium/thumb/gift-box-6894594-5740394.png" />
                  <IonLabel>Rewards</IonLabel>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <img src="https://cdn3d.iconscout.com/3d/premium/thumb/insurance-6949100-5695091.png" />
                  <IonLabel>Insurance</IonLabel>
                </div>
              </SwiperSlide>
            </Swiper>
          </IonCol>
        </IonRow>
        <IonRow class="transaction">
          <IonCol size="12">
            <IonLabel>Transactions</IonLabel>
            <IonCard class="card">
              <IonCardContent class="ion-padding-vertical ion-no-padding">
                <IonItem class="" lines="none">
                  <IonAvatar slot="start">
                    {/* <img alt="image" src="" /> */}
                    <IonIcon icon={cafe}></IonIcon>
                  </IonAvatar>
                  <IonLabel><span className="user-name">Starbucks</span><span className="date-time">6:50 pm</span></IonLabel>
                  <div>
                    <span className="price">$25</span>
                  </div>
                </IonItem>
                <IonItem class="" lines="none">
                  <IonAvatar slot="start">
                    {/* <img alt="image" src="" /> */}
                    <IonIcon icon={bagHandle}></IonIcon>
                  </IonAvatar>
                  <IonLabel><span className="user-name">Shopping</span><span className="date-time">Jun 12, 11:45
                      am</span></IonLabel>
                  <div>
                    <span className="price">$125.50</span>
                  </div>
                </IonItem>
                <IonItem class="" lines="none">
                  <IonAvatar slot="start">
                    {/* <img alt="image" src="" /> */}
                    <IonIcon icon={musicalNotes}></IonIcon>
                  </IonAvatar>
                  <IonLabel><span className="user-name">Apple Music</span><span className="date-time">May 20, 1:07
                      pm</span></IonLabel>
                  <div>
                    <span className="price">$99</span>
                  </div>
                </IonItem>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
        <div className="bottom-bg"></div>
        </IonGrid>
        {/* <ExploreContainer name="Tab 1 page" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
