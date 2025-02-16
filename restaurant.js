import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
  <div className="head">
    <img
      alt="Logo"
      className="logo"
      src="https://media.istockphoto.com/id/1471795600/photo/food-for-people-neon-sign.jpg?s=1024x1024&w=is&k=20&c=AEcKm62IGvXh2MTR2nIW5asorJJMISP3CVSMAELrtzo="
    />
    <h2 className="foodapp">Food For You</h2>
    <ul className="nav-items">
      <li style={{ color: "blue" }}>Home</li>
      <li>Restaurants</li>
      <li>Profile</li>
      <li>Cart</li>
    </ul>
  </div>
);

// Receiving the agruments as props and using them ... properties will come as object and use them
// The props which are coming should match with the name of the prop coming from the card
const ResCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="rescard">
      <img
        className="resimg"
        alt="restaurant card"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Rating</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

const ResList = [
  {
    info: {
      id: "364443",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/2cdd9eea-83e5-4114-84d5-566b28a600a5_364443.jpg",
      locality: "SS Mall",
      areaName: "Rameswaram",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.4,
      parentId: "721",
      avgRatingString: "4.4",
      totalRatingsString: "2.3K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-16 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8676065a-3236-44a9-a85c-87a0f1a65dbb",
    },
    cta: {
      link: "https://www.swiggy.com/city/proddatur/pizza-hut-ss-mall-rameswaram-rest364443",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "250293",
      name: "Cool Court",
      cloudinaryImageId: "5bd4612e6180da30c7038cdd15eeb9f3",
      locality: "Rameswaram",
      areaName: "GANDHI ROAD",
      costForTwo: "₹200 for two",
      cuisines: ["Biryani", "South Indian"],
      avgRating: 4.4,
      parentId: "65082",
      avgRatingString: "4.4",
      totalRatingsString: "3.5K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-16 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8676065a-3236-44a9-a85c-87a0f1a65dbb",
    },
    cta: {
      link: "https://www.swiggy.com/city/proddatur/cool-court-rameswaram-gandhi-road-rest250293",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "247362",
      name: "Star Chicken (It's Fried)",
      cloudinaryImageId: "01d705b8ec1536f4291071456d478c66",
      locality: "Sreeramulapet \n",
      areaName: "GANDHI ROAD",
      costForTwo: "₹200 for two",
      cuisines: ["pizzas", "Burgers", "Sandwich", "Continental"],
      avgRating: 4.1,
      parentId: "231070",
      avgRatingString: "4.1",
      totalRatingsString: "1.5K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-16 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹149",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8676065a-3236-44a9-a85c-87a0f1a65dbb",
    },
    cta: {
      link: "https://www.swiggy.com/city/proddatur/star-chicken-its-fried-sreeramulapet-gandhi-road-rest247362",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "586739",
      name: "Dark purple",
      cloudinaryImageId: "qfwtjhrplajltktoi3fn",
      locality: "YMR Colony",
      areaName: "YMR COLONY",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Desserts", "Beverages"],
      avgRating: 4.4,
      parentId: "351071",
      avgRatingString: "4.4",
      totalRatingsString: "520",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-16 21:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8676065a-3236-44a9-a85c-87a0f1a65dbb",
    },
    cta: {
      link: "https://www.swiggy.com/city/proddatur/dark-purple-ymr-colony-rest586739",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "1037546",
      name: "Pasidipuri Family Restaurant",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/31/9eb50c99-6cf0-465f-b7c3-11cbce5d49ce_1037546.jpg",
      locality: "Rameswaram",
      areaName: "Rameswaram",
      costForTwo: "₹399 for two",
      cuisines: ["Chinese", "Biryani"],
      avgRating: 4.6,
      parentId: "603885",
      avgRatingString: "4.6",
      totalRatingsString: "21",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-16 15:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹250",
        discountTag: "SAVE BIG",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8676065a-3236-44a9-a85c-87a0f1a65dbb",
    },
    cta: {
      link: "https://www.swiggy.com/city/proddatur/pasidipuri-family-restaurant-rameswaram-rest1037546",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "188909",
      name: "Priya Ice Cream & Fast Foods",
      cloudinaryImageId: "g8re7qyiwstwzby8g3qs",
      locality: "Srinivasa Nagar",
      areaName: "SIVALAYAM CIRCLE",
      costForTwo: "₹299 for two",
      cuisines: ["Chinese", "Ice Cream", "Beverages"],
      avgRating: 4.3,
      parentId: "161350",
      avgRatingString: "4.3",
      totalRatingsString: "3.4K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-16 21:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹699",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8676065a-3236-44a9-a85c-87a0f1a65dbb",
    },
    cta: {
      link: "https://www.swiggy.com/city/proddatur/priya-ice-cream-and-fast-foods-srinivasa-nagar-sivalayam-circle-rest188909",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "949326",
      name: "Infinity Restro Cafe",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/29/266c5d1f-e809-4db7-a966-08f288275fe6_949326.jpg",
      locality: "Rameswaram",
      areaName: "Rameswaram",
      costForTwo: "₹349 for two",
      cuisines: [
        "Chinese",
        "Andhra",
        "Biryani",
        "Ice Cream",
        "Juices",
        "Sweets",
      ],
      avgRating: 4.1,
      parentId: "555986",
      avgRatingString: "4.1",
      totalRatingsString: "165",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 1,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-16 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹119",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8676065a-3236-44a9-a85c-87a0f1a65dbb",
    },
    cta: {
      link: "https://www.swiggy.com/city/proddatur/infinity-restro-cafe-rameswaram-rest949326",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "694126",
      name: "Kovvuru Grand",
      cloudinaryImageId: "19d631619a0daf868ced04201fa181ba",
      locality: "Proddatur",
      areaName: "AUTO NAGAR",
      costForTwo: "₹400 for two",
      cuisines: ["Biryani", "South Indian", "Chinese", "North Indian"],
      avgRating: 4.2,
      parentId: "415536",
      avgRatingString: "4.2",
      totalRatingsString: "1.6K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-16 15:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹50 OFF",
        subHeader: "ABOVE ₹149",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8676065a-3236-44a9-a85c-87a0f1a65dbb",
    },
    cta: {
      link: "https://www.swiggy.com/city/proddatur/kovvuru-grand-auto-nagar-rest694126",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

// Adding arguments to function is same as adding properties to the functional components
// when mapping or looping we need to add key value for unique rendering and for performance improvement
// not using any key <<<<< using key as index <<<<<<<< using key as unique identifier ( best way)
const Body = () => (
  <div className="body">
    <input className="search" type="text" placeholder="Search for restaurant" />
    <div className="rescontainer">
      {ResList.map((rest) => (
        <ResCard key={rest.info.id} resData={rest} />
      ))}
    </div>
  </div>
);

const ResContainer = () => (
  <div>
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ResContainer />);
