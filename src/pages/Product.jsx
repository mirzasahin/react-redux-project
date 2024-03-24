import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { modalFunc } from "../redux/modalSlice"
import { createDataFunc } from "../redux/dataSlice"

const Product = () => {
  const { modal } = useSelector((state) => state.modal);
  const { data } = useSelector((state) => state.data)
  const dispatch = useDispatch()

  const [productInfo, setProductInfo] = useState({ name: "", price: "", url: "" })

  const onChangeFunc = (e, type) => {
    if (type == "url") {
      setProductInfo(prev => ({ ...prev, [e.target.name]: URL.createObjectURL(e.target.files[0]) }))

    } else {
      setProductInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
  };

  console.log(data)

  const buttonFunc = () => {
    dispatch(createDataFunc(productInfo))
    dispatch(modalFunc())
    console.log(data.item.name, data.item.price)
  }

  const contentModal = (
    <>
      <Input
        placeholder={"Ürün ekle"}
        name={"name"}
        id={"name"}
        onChange={(e) => onChangeFunc(e, "name")}
        type={"text"}
      />

      <Input
        placeholder={"Fiyat ekle"}
        name={"price"}
        id={"price"}
        onChange={(e) => onChangeFunc(e, "price")}
        type={"number"}
      />

      <Input
        placeholder={"Resim seç"}
        name={"url"}
        id={"url"}
        onChange={(e) => onChangeFunc(e, "url")}
        type={"file"}
      />

      <Button btnText={"Ürün Oluştur"} onClick={buttonFunc} />
    </>
  )
  return (
    <div>
      <div>
        {data?.map((dt, i) => (
          <ProductCard key={i} dt={dt}/>
 
        ))}
      </div>
      {modal && <Modal content={contentModal} title={"Ürün oluştur"} />}
    </div>
  );
};

export default Product;
