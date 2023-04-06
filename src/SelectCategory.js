import React, {useRef} from 'react'



export default function SelectCategory({categories, categoryEl}) {

    return (
        <div className="form-group">
            <label htmlFor="category">Category</label>
            <select id="category" ref={categoryEl}>
            {categories.map(category => {
                return <option value={category.id} key={category.id}>{category.name}</option>
            })}
            </select>
        </div>
  )
}

