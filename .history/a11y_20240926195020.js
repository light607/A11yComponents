class A11Modal extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'})
        this.shadowRoot.innerHTML=`
        <style>
        .modal {display:none;}
        .modal.open {display:block}
        </style>
        <div class="modal" role="dialog" aria-labelled="modalTitle" aria-hidden="true">
        <div class="modal-content">
<h2 id="modalTitle">
<slot name="title"></slot></h2>
          <slot></slot>
                    <button id="closeButton">Close</button>

        </div>
        
        </div>
        `
        
    }
}