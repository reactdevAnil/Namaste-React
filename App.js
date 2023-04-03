import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <div className="logo-container">
    <img
    className="logo"
      alt="logo"
      src="data:image/png;base64,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"
    />
  </div>
);
const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};
const RestrauntList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "73011",
      name: "KFC",
      uuid: "27ff4155-fe46-418e-9862-ab98953bf953",
      city: "22",
      area: "Anand Vihar Colony",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["American", "Snacks", "Biryani"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 6.199999809265137,
      slugs: {
        restaurant: "kfc-chukkuwala-chukkuwala",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "KFC Restaurant, Khasra No 1281/1291, Opp Dr Manish Jain hospital, Chakrata road, Dehradun-248001",
      locality: "Clock Tower",
      parentId: 547,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5698075~p=1~eid=00000185-8b09-7c92-0e51-a04b00dc0124",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "73011",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 6.199999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.0",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "542132",
      name: "Domnik Pizza",
      uuid: "f2ee37f5-9ab0-4903-9420-6cae020b0a38",
      city: "22",
      area: "Majra    Bansal Home",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "sboh9oor0cvp6ztsyhvj",
      cuisines: ["Pizzas", "Italian", "Fast Food", "Snacks", "Beverages"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 33,
      minDeliveryTime: 33,
      maxDeliveryTime: 33,
      slaString: "33 MINS",
      lastMileTravel: 0.6000000238418579,
      slugs: {
        restaurant: "domnik-pizza-patel-nagar-patel-nagar-2",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "28/3 Sewala Chandravani Road, Arcedia Grant, Dehradun Rural, Dehradun, Uttarakhand",
      locality: "Patel Nagar",
      parentId: 22321,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "542132",
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        lastMileTravel: 0.6000000238418579,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "321517",
      name: "FOOD PLANET RESTAURANT",
      uuid: "899d5dd4-200a-48b2-a321-391bb9486ec2",
      city: "22",
      area: "Majra",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "ykboewqeoxnne8fgrnui",
      cuisines: ["Indian", "Chinese", "Tandoor", "Thalis", "Fast Food"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 0.699999988079071,
      slugs: {
        restaurant: "food-planet-restaurant-patel-nagar-patel-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "157/11, Chandra Parisar Chandra Bani Rd, Ekta Enclave, Doon Enclave, Majra, Dehradun, Uttarakhand 248171",
      locality: "Patel Nagar",
      parentId: 81850,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "321517",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 0.699999988079071,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "2.8",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "311806",
      name: "Burger King",
      uuid: "162a4dc4-50de-452a-82cf-751e18ac9952",
      city: "22",
      area: "Anand Vihar Colony",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "iqh7ew5ldfgvpd5dpz60",
      cuisines: ["Burgers", "American"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 39,
      minDeliveryTime: 39,
      maxDeliveryTime: 39,
      slaString: "39 MINS",
      lastMileTravel: 6.300000190734863,
      slugs: {
        restaurant: "burger-king-chakrata-road-ballupur",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "5/5,4/4 & 3/3, GROUND FLOOR, CHAKRATA ROAD, DEHRADUN, UTTRAKHAND",
      locality: "CHAKRATA ROAD",
      parentId: 166,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5700193~p=4~eid=00000185-8b09-7c92-0e51-a04c00dc0405",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "311806",
        deliveryTime: 39,
        minDeliveryTime: 39,
        maxDeliveryTime: 39,
        lastMileTravel: 6.300000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.2",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "132460",
      name: "Annapurna Andhra Mess",
      uuid: "c6460418-904b-4371-9e04-0ce8b1b46cae",
      city: "22",
      area: "Dehradun",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "zw4qx2szsy9kbszk9n3d",
      cuisines: ["South Indian", "Biryani", "North Indian"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 1.399999976158142,
      slugs: {
        restaurant: "annapurna-andhra-mess-subhash-nagar-subhash-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "keshav enclave sewla khurd chandrabani road behind uttranchal PG college",
      locality: "Patel Nagar",
      parentId: 33997,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "132460",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 1.399999976158142,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "496677",
      name: "Uncle Ji Restaurant",
      uuid: "e652ab57-22c2-4226-b5ea-a5caa26ee0f8",
      city: "22",
      area: "Patel Nagar",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "kx2ghnwagcnqjtmd5jbc",
      cuisines: ["North Indian", "Snacks", "Beverages"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 0.800000011920929,
      slugs: {
        restaurant: "uncle-ji-restaurant-patel-nagar-patel-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address: "348 santosh tower, majra road gram majra dehradun 248001",
      locality: "Patel Nagar",
      parentId: 298209,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "496677",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 0.800000011920929,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "73011",
      name: "KFC",
      uuid: "27ff4155-fe46-418e-9862-ab98953bf953",
      city: "22",
      area: "Anand Vihar Colony",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["American", "Snacks", "Biryani"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 6.199999809265137,
      slugs: {
        restaurant: "kfc-chukkuwala-chukkuwala",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "KFC Restaurant, Khasra No 1281/1291, Opp Dr Manish Jain hospital, Chakrata road, Dehradun-248001",
      locality: "Clock Tower",
      parentId: 547,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5698075~p=1~eid=00000185-8b09-7c92-0e51-a04b00dc0124",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "73011",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 6.199999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.0",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "73011",
      name: "KFC",
      uuid: "27ff4155-fe46-418e-9862-ab98953bf953",
      city: "22",
      area: "Anand Vihar Colony",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["American", "Snacks", "Biryani"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 6.199999809265137,
      slugs: {
        restaurant: "kfc-chukkuwala-chukkuwala",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "KFC Restaurant, Khasra No 1281/1291, Opp Dr Manish Jain hospital, Chakrata road, Dehradun-248001",
      locality: "Clock Tower",
      parentId: 547,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5698075~p=1~eid=00000185-8b09-7c92-0e51-a04b00dc0124",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "73011",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 6.199999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.0",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "73011",
      name: "KFC",
      uuid: "27ff4155-fe46-418e-9862-ab98953bf953",
      city: "22",
      area: "Anand Vihar Colony",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["American", "Snacks", "Biryani"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 6.199999809265137,
      slugs: {
        restaurant: "kfc-chukkuwala-chukkuwala",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "KFC Restaurant, Khasra No 1281/1291, Opp Dr Manish Jain hospital, Chakrata road, Dehradun-248001",
      locality: "Clock Tower",
      parentId: 547,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5698075~p=1~eid=00000185-8b09-7c92-0e51-a04b00dc0124",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "73011",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 6.199999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.0",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "73011",
      name: "KFC",
      uuid: "27ff4155-fe46-418e-9862-ab98953bf953",
      city: "22",
      area: "Anand Vihar Colony",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["American", "Snacks", "Biryani"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 6.199999809265137,
      slugs: {
        restaurant: "kfc-chukkuwala-chukkuwala",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "KFC Restaurant, Khasra No 1281/1291, Opp Dr Manish Jain hospital, Chakrata road, Dehradun-248001",
      locality: "Clock Tower",
      parentId: 547,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5698075~p=1~eid=00000185-8b09-7c92-0e51-a04b00dc0124",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "73011",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 6.199999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.0",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  }
];

// const RestrauntCard=()=>{
//     return(

//     )
// }
const RestrauntCard = (props) => {
const {resData}=props
const {name,cloudinaryImageId,address,avgRating,id}=resData?.data
  return (
    <div className="res-card" key={id}>
      <img 
      className="res-logo"
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{avgRating}</h4>
      <h4>{address}</h4>
    </div>
  );
};
const Body = () => (
  <div className="body"> 
    <div className="search">
      Search
    </div>
    <div className="res-container">
   {RestrauntList.map((elems)=>{
    console.log("elems"+ elems.data)

    return(
      <RestrauntCard  resData={elems}/>
    )
   })}
  </div>
  </div>
  

);

const Footer = () => <h1>footer</h1>;

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
