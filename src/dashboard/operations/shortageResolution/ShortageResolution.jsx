import React from 'react'
import PageTitle from '../../../utils/PageTitle'
import FormTitle from '../../FormTitle'
import LiquidHeight from './LiquidHeight'



function ShortageResolution() {
    PageTitle('Axle & Cartage - Shortage Resolution')
    return (
        <div>
            <FormTitle Title={'Shortage Resolution'} />
            <hr />
            <LiquidHeight />
        </div>
    )
}

export default ShortageResolution