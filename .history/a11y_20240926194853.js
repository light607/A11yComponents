class A11Modal extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'})
        this.shadowRoot.innerHTML=`
        <style>
        .modal {display:none;}
        .modal.open {display:block}
        </style>
        <div class="modal" role="dialog" aria-labelled="modal>
        `
        
    }
}