import {IngredientsType} from "./styles"


export function InputIngredient({ icon: Icon, ...rest }) {
  return (
    <IngredientsType>
      <div>
        <input {...rest} />
        {Icon && <Icon size={20} />}
      </div>
    </IngredientsType>
  )
}
