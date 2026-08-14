interface RegisterData {
    pseudo: string;
    age: string;
    mdp: string;
    confirmMdp: string;
    nationality: string;
    team: string
}

// 2. On définit la structure du retour de la fonction
interface ValidationResult {
    isValid: boolean;
    errors: {
        pseudo?: string;
        age?: string;
        mdp?: string;
        confirmMdp?: string;
        nationality?: string;
        team?: string
    };
}

export const validationRegister = (formData: RegisterData) : ValidationResult => {
    let errors: ValidationResult['errors'] = {};

    if (!formData.pseudo){
        errors.pseudo = "Le Pseudo est requi"
    } else if ( formData.pseudo.length <= 5){
        errors.pseudo = "Le Pseudo est trop court";
    }

    if (!formData.age){
        errors.age = "L'age est requi"
    } 
    // else if( formData.age &&  isNaN(Number(formData.age))){
    //     errors.age = "l'age doit etre un nombre";
    // }
    
    if (!formData.mdp){
        errors.mdp = "Le mot de passe est requi"
    } else if ( formData.mdp.length <= 8){
        errors.mdp = "Le mot de passe est trop court";
    }

    if (!formData.team){
        errors.team = "Le club est requi"
    }

    if (!formData.nationality){
        errors.nationality = "La nationalité est requi"
    }

    if (!formData.confirmMdp){
        errors.confirmMdp = "Veuillez confirmez votre mot de passe";
    }
    else if(formData.mdp !== formData.confirmMdp){
        errors.confirmMdp = "confirmation incorrect";
    }

    return{
        isValid: Object.keys(errors).length === 0, errors
    }
}