import PropTypes from "prop-types";
import { useProductStore } from "../stores/useProductStore";
import { useUserStore } from "../stores/useUserStore";
import { Loading } from "./Loading";

export const HeartButton = ({ style, id, setOpenDrawer }) => {
  const { accessToken, saveFavorites, favorite, loading } = useUserStore(
    (state) => ({
      accessToken: state.accessToken,
      saveFavorites: state.saveFavorites,
      favorite: state.favorite,
      loading: state.loading,
    }),
  );
  const { unlikeProduct, likeProduct } = useProductStore((state) => ({
    unlikeProduct: state.unlikeProduct,
    likeProduct: state.likeProduct,
    // favoriteProducts: state.favoriteProducts,
  }));
  const handleLike = () => {
    loading(true);
    if (accessToken) {
      // favoriteProducts.includes(id) ? unlikeProduct(id) : likeProduct(id);
      if (favorite.includes(id)) {
        unlikeProduct(id);
        saveFavorites(id, "remove");
      } else {
        likeProduct(id);
        saveFavorites(id);
      }
    } else {
      setOpenDrawer(true);
      loading(false);
    }
    }
  return (
    <button className={style} onClick={handleLike}>
      {loading ? (
        <Loading /> 
      ) : (
      <svg
        viewBox="0 0 24 24"
        fill={favorite.includes(id) ? "#3D52A0" : "none"}
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M17 16C15.8 17.3235 12.5 20.5 12.5 20.5C12.5 20.5 9.2 17.3235 8 16C5.2 12.9118 4.5 11.7059 4.5 9.5C4.5 7.29412 6.1 5.5 8.5 5.5C10.5 5.5 11.7 6.82353 12.5 8.14706C13.3 6.82353 14.5 5.5 16.5 5.5C18.9 5.5 20.5 7.29412 20.5 9.5C20.5 11.7059 19.8 12.9118 17 16Z"
            stroke="#3D52A0"
            strokeWidth="1"
          ></path>
        </g>
      </svg>
      )}
    </button>
  );
};
HeartButton.propTypes = {
  setOpenDrawer: PropTypes.func,
  id: PropTypes.string,
  style: PropTypes.string,
};
