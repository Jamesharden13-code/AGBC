import { COLORS } from "../styles/Style"

export const getGradientLabel = ( error : string | undefined , isActive : boolean ) => {
        if ( error ) return COLORS.alert
        if (isActive) return COLORS.active
        return COLORS.inactive
}

export  const formatDate = (selectedDate : Date) => {
        const day = String(selectedDate.getDate()).padStart(2, '0');
        const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
        const year = String(selectedDate.getFullYear());
        return `${day}/${month}/${year}`
}