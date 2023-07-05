import React from 'react'
import Form from 'react-bootstrap/Form'

function EpisodeInput({total, setId, aux}) {
  return (
    <>
    <Form.Select
    onChange={e=>setId(e.target.value)}
    >
      <option selected value="1">Episode - 1</option>

        {[...Array(total).keys()].map((e) => {
            return(
                <option value={e+2}>
                    Episode - {e+2}
                </option>
            );
        })}
    </Form.Select>
    </>
  )
}

export default EpisodeInput