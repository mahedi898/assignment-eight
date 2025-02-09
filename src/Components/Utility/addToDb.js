import toast from "react-hot-toast"

const getStoredCardList = () => {
    const storedListStr = localStorage.getItem("card-list");
    if (storedListStr) {
        return JSON.parse(storedListStr); 
    } 
    return [];
};

const addToStoredCardList = (id) => {
    const storedList = getStoredCardList();
    if (storedList.includes(id)) {
        toast.error('This item already add to your card!');
    } else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem("card-list", storedListStr); 
        toast.success('Successfully created!');
        
    }
};

const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem("wish-list");
    if (storedWishListStr) {
        return JSON.parse(storedWishListStr);
    }
    return [];
};

const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if (storedWishList.includes(id)) {
        toast.error('This item already add to your wish list!');
    } else {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem("wish-list", storedWishListStr);
        toast.success('Successfully created!');
    }
};




const removedCard = (id) => {
    const addedCard = getStoredCardList();
    const remaining = addedCard.filter(storedId => storedId != id); 
    const storedListStr = JSON.stringify(remaining);
    localStorage.setItem("card-list", storedListStr);
    toast.success("Successfully removed!");
};
const removedCardWish = (id) => {
    const addedWishList = getStoredWishList();
    const remaining = addedWishList.filter(storedId => storedId != id); 
    const storedListStr = JSON.stringify(remaining);
    localStorage.setItem("wish-list", storedListStr); 
    toast.success("Successfully removed from Wish List!");
};


export { getStoredCardList, addToStoredCardList, getStoredWishList, addToStoredWishList, removedCard, removedCardWish };