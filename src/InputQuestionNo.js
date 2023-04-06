import React, {useRef} from 'react'

export default function InputQuestionNo({ammountEl}) {
    

    return (
        <div className="form-group">
            <label htmlFor="ammount">Number of Questions</label>
            <input type="number" id="ammount" min="1" step="1" defaultValue={10} ref={ammountEl} />
        </div>
    )
}
