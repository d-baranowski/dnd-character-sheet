import React from 'react';
import Basket from "./Basket";

const EquipmentTable = () => (
  <g id="table">
    <g>
      <path fill="#dedfdf" d="M771.62 1000.87a17.8 17.8 0 0 0-.4-8.2l1.78-6.63v12.83c-.37.6-.83 1.27-1.38 2M773 710.36v-12.83c-.37-.6-.83-1.27-1.38-2a17.8 17.8 0 0 1-.4 8.19zM43 697.53v12.83l1.79-6.64a17.81 17.81 0 0 1-.41-8.19c-.55.73-1 1.4-1.38 2m714.75 312.08H448.76a1.04 1.04 0 0 1-1.95-.5 1.04 1.04 0 1 1 1.96-.5h308.98c5.95 0 10.23-3.42 12.93-6.58.34-1.32 1.13-5.2-.13-9.25l-.03-.1.03-.08 2.45-9.13V712.92l-2.48-9.21.03-.1c1.26-4.02.48-7.9.14-9.24-2.7-3.15-6.99-6.58-12.94-6.58H448.76a1.04 1.04 0 0 1-1.95-.5 1.04 1.04 0 1 1 1.96-.5h308.98c7.64 0 12.67 5.28 15.25 8.94v-2.52c-2.44-2.64-8.16-7.93-16.33-9.94H59.32c-8.17 2.02-13.89 7.3-16.32 9.94v2.52c2.58-3.66 7.61-8.94 15.25-8.94h308.99c.18-.32.47-.55.87-.55.57 0 .87.47.87 1.05 0 .58-.08 1.05-.66 1.05-.4 0-.47-.23-.65-.55H58.25c-5.95 0-10.24 3.43-12.94 6.58a17.66 17.66 0 0 0 .14 9.24l.03.1-.03.09-2.45 9.12v270.55l2.48 9.22-.03.1a17.67 17.67 0 0 0-.14 9.23c2.7 3.16 7 6.59 12.94 6.59h309.2c.18-.33.7-.56 1.1-.56.57 0 .64.47.64 1.06 0 .57.15 1.04-.43 1.04-.4 0-.7-.22-.87-.54H58.25c-7.64 0-12.67-5.28-15.25-8.94v2.52c2.44 2.64 8.16 7.92 16.34 9.94h697.33c8.17-2.02 13.9-7.3 16.33-9.94v-2.52c-2.58 3.66-7.61 8.94-15.25 8.94M43 986.04v12.83c.37.59.83 1.27 1.38 2-.34-1.88-.58-4.95.4-8.2zm0 18.12v3.44s4.86 2.89 6.1 5.53h7.83a35.57 35.57 0 0 1-13.93-8.97m730-311.92v-3.44s-4.86-2.9-6.1-5.53h-7.83a35.58 35.58 0 0 1 13.93 8.97m-13.93 320.88h7.83c1.24-2.63 6.1-5.52 6.1-5.52v-3.44a35.56 35.56 0 0 1-13.93 8.96M56.93 683.27H49.1c-1.24 2.64-6.1 5.53-6.1 5.53v3.44a35.57 35.57 0 0 1 13.93-8.97"/>
      <path d="M767.33 974.4l-.02-.64-.62-.04c-.03 0-2.09-.21-2.69-5.34V698.24l-.59-.19c-1.48-.46-5.34-2.16-5.34-4.43v-.83H57.94v.83c0 2.27-3.87 3.97-5.35 4.43l-.59.19v270.14c-.6 5.13-2.66 5.34-2.67 5.34h-.66v.67c0 6.2 1.42 11.08 3.33 14.86v7.52l.59.18c1.48.46 5.35 2.16 5.35 4.43v.83h700.13v-.83c0-2.26 3.86-3.96 5.34-4.43l.59-.18v-7.52a32.43 32.43 0 0 0 3.33-14.86m-2.94-.72a3.64 3.64 0 0 0 1.6 1.25 32.12 32.12 0 0 1-1.99 11v-12.84c.12.21.25.4.39.59M53.67 707.18c.22-.46.6-1.2 1.12-2.13v262.7c0 4.53-.38 9.66-1.12 15.3zm0 280.54c1.19-7.5 1.79-14.2 1.79-19.96V703.93c2.2-3.56 6.13-8.51 11.3-9.47h682.47c5.17.96 9.1 5.91 11.31 9.47v263.83c0 5.75.6 12.46 1.8 19.96v1.82a26.3 26.3 0 0 1-4.26 5.71 25.47 25.47 0 0 1-7.46 5.3H65.38a26.38 26.38 0 0 1-11.71-11.03zm708.66-4.68a118.58 118.58 0 0 1-1.12-15.28v-262.7c.53.92.9 1.67 1.12 2.12zm0-283.6v4.86c-1.7-2.97-4.83-7.51-9.18-9.84h3.34c.65 2.78 4.37 4.43 5.84 4.98m-702.82-4.98h3.34c-4.35 2.33-7.49 6.87-9.18 9.84v-4.86c1.47-.55 5.2-2.2 5.84-4.98M50 974.92c.43-.16 1.03-.5 1.6-1.25.14-.18.27-.38.39-.59v12.86a31.97 31.97 0 0 1-2-11.02m3.67 20.64v-3.45a27.4 27.4 0 0 0 8.84 8.44h-3c-.64-2.78-4.37-4.44-5.84-4.99m702.82 4.99h-3a27.7 27.7 0 0 0 8.84-8.44v3.45c-1.47.55-5.2 2.2-5.84 4.99"/>
      <path fill="#fff" d="M62.59 998.66c-3.01-1.95-6.38-5.29-7.84-7.78l-1.05-1.79.93-6.55.92-6.56.2-136.32.21-136.33.93-1.2c2.06-2.67 5.12-5.45 7.04-6.4l2.04-1.02h342.01c336.46.02 342.04.03 343.71.79 1.84.83 5.05 3.65 7.08 6.22l1.27 1.6.2 136.33.21 136.33.93 6.56.92 6.55-1.08 1.85c-1.47 2.51-5.67 6.63-8.28 8.13l-2.15 1.23H65.13zM53.7 701.83l-.01-2.39.18-.07c1.7-.66 3.29-1.62 4.24-2.57.7-.7 1.14-1.39 1.36-2.16l.06-.18h1.63c1.6 0 1.64 0 1.57.05l-.46.26c-1.22.73-2.34 1.6-3.52 2.77a29.76 29.76 0 0 0-5.01 6.6c-.05.08-.05.02-.05-2.3z"/>
      <path fill="#fff" d="M55.47 715.6v-11.68l.15-.22a25.67 25.67 0 0 1 6.05-6.87 12.82 12.82 0 0 1 4.57-2.25l.4-.1 29.35-.01 29.35-.01v.25H65.95l-1.2.6c-1.16.59-1.57.82-2.1 1.2a29.15 29.15 0 0 0-6.16 6.13l-.53.69-.02 7.78-.01 11.98v4.2h-.46zM53.69 717.21v-10.07l.3-.58c.3-.6.72-1.36.76-1.4.01-.02.02 4.57.02 11.05v11.07H53.7zM53.68 770.69v-43.36h1.07v86.72h-1.07z"/>
      <path fill="#fff" d="M55.46 730.88l.01-11.23v7.64h.46l-.02 5.85-.02 11.23v5.39h-.43z"/>
      <path fill="#fff" d="M55.88 757.57l.01-7.81h-.43V739.4l.01-11.05.01-.71H104.86v37.74H55.87zm.02-14.3v0zm.02-6.73l-.01.02v.03a.1.1 0 0 0 0-.05zm0-.5c0-.05-.01-.02-.01.06v.07c.01-.03.01-.1 0-.14zm0-1.29v0zm0-.6l-.01.07v-.06zm0-.27l-.01.03v.04a.2.2 0 0 0 0-.07z"/>
      <path fill="#fff" d="M55.46 757.57v-7.81h.43l-.01 4.08-.01 7.82v3.73H55.46zM55.46 772.5v-7.1H55.87v2.02l-.02 7.11v5.08h-.39zM55.46 786.72v-7.11h.38v5.11l-.02 7.11v2h-.36zM55.81 795.88z"/>
      <path fill="#fff" d="M55.46 803.78v-9.95h.36l-.01 7.4-.01 9.94v2.56h-.34zM55.46 822.97v-9.24h.33v4.46l-.02 9.24-.01 4.78h-.3zM53.68 823.13v-9.08h1.07v-9.8c0-6.5 0-9.78.02-9.78l.01 18.87v18.87h-1.1z"/>
      <path fill="#fff" d="M55.76 839.32v-7.1h-.3v-23.54h49.4v37.75H55.74z"/>
      <path fill="#fff" d="M55.46 839.32v-7.1h.31l-.01 3.89-.02 7.1v3.22h-.28zM53.68 843.58v-11.37h1.1v22.75h-1.1z"/>
      <path fill="#fff" d="M55.46 856.38v-9.95H55.75l-.01 6.64-.02 9.95-.02 3.31h-.24zM53.68 866.33v-11.37h1.1v22.74h-1.1z"/>
      <path fill="#fff" d="M55.7 880.19a14923.11 14923.11 0 0 0 .01-16.69v2.83h-.25v-17.84h49.4v37.74H55.7z"/>
      <path fill="#fff" d="M55.46 876.28v-9.95h.25v8.81l-.03 9.95-.01 1.14H55.46zM53.68 889.08V877.7h1.1v22.75h-1.1zM55.46 901.16v-14.93H55.69v.64L55.65 897l-.02 14.3v4.78h-.18z"/>
      <path fill="#fff" d="M53.68 912.53v-12.08h1.1v24.17h-1.1zM55.63 925.24V916l-.01.09h-.16V896.82h.2v6.29-3.14l.01-3.15h49.2v37.75H55.61zm.02-15.47v0zm0-1.96v0z"/>
      <path fill="#fff" d="M55.63 925.33v-9.24H55.47V896.82h.2v1.8-.9l.01-.9h49.2v37.75H55.6zm.04-26.6v0z"/>
      <path fill="#fff" d="M55.46 925.33v-9.24h.16v7.58l-.01 9.24-.01 1.66h-.14zM53.68 935.28v-10.66h1.1v21.32h-1.1z"/>
      <path fill="#fff" d="M55.46 937.11v-2.54h.14v-.04a962.61 962.61 0 0 1 .02-3.17l-.01 7.7v.6H55.45z"/>
      <path fill="#fff" d="M55.6 942v-2.34h-.14v-3.6h10.71v8.29H55.6z"/>
      <path fill="#fff" d="M55.46 942v-2.34h.14V944.35h-.14zM55.46 946.7v-2.35h.14v4.68h-.14zM53.67 946.76a161.26 161.26 0 0 1 .01-2.48v1.67h1.1v-1.67V950.9h-1.11zM55.46 951.07v-2.04h.13v4.07h-.13zM53.67 953.1v-2.19h1.12v4.37h-1.12z"/>
      <path fill="#fff" d="M55.46 955.44v-2.34h.13v1.88l-.01 2.34v.46h-.12zM53.67 958.1v-2.82h1.12v5.63h-1.12z"/>
      <path fill="#fff" d="M55.46 959.35v-1.57h.12v3.13h-.12zM55.46 962.47v-1.56h.11v3.12h-.11zM53.67 963.57v-2.66h1.12V966.22h-1.12z"/>
      <path fill="#fff" d="M55.46 968.37v-4.34h.11v4.38h-.12zM53.67 968.88v-2.66h1.12v2.5a93.21 93.21 0 0 1-.08 2.8v.01h-1.04zM55.25 974.02l.04-.7a100.23 100.23 0 0 0 .17-4.78v-.13h.1V974.03h-.31zM53.68 977.17v-5.63h1.02l-.01.32a128.85 128.85 0 0 1-.98 10.73c-.02.18-.03-.64-.03-5.42zM54.2 984.22l.04-.38a142.03 142.03 0 0 0 1-9.78c.01-.02.02-.02.16-.02h.15v1.92l-.58 4.12-.58 4.14c0 .02-.01.02-.1.02-.08 0-.1 0-.1-.02zM51.98 985.86l-.12-.33a32.08 32.08 0 0 1-1.84-10.23l-.01-.38.15-.06a3.91 3.91 0 0 0 1.75-1.62l.09-.13v6.39a1706.47 1706.47 0 0 1-.02 6.36zM59.46 1000.34a4.74 4.74 0 0 0-.95-1.7c-.17-.2-.65-.68-.88-.87a13.86 13.86 0 0 0-3.85-2.17l-.1-.04v-1.72l-.01-1.71.21.3a27.73 27.73 0 0 0 8.22 7.87l.33.21c.04.03.01.03-1.43.03h-1.48z"/>
      <path fill="#fff" d="M65.18 1000.45a26.77 26.77 0 0 1-11.36-10.66l-.15-.28v-1.76l.11-.75a170.3 170.3 0 0 0 .42-2.77l.1.02h.08l-.34 2.42-.34 2.43.56.95c.6 1.03.74 1.25.98 1.6a29.1 29.1 0 0 0 8.5 7.76l1.38.9H95.4V1000.54H65.38l-.2-.1zM753.8 1000.38a27.52 27.52 0 0 0 8.27-7.87l.26-.37v1.71l-.01 1.71-.17.06c-.97.37-2.05.93-2.86 1.47-.62.41-1.05.76-1.5 1.21a5.2 5.2 0 0 0-1.3 2.2c0 .04-.08.04-1.48.04h-1.49zM721.1 1000.42v-.12h29.7l1-.58c1.58-.9 1.83-1.05 2.59-1.62 1.08-.8 2.1-1.7 3.32-2.93 1.2-1.2 1.97-2.06 2.72-3.06.42-.56.62-.87 1.28-2l.6-1.01-.93-6.58-.93-6.57v-3.59c0-3.58 0-3.6.04-3.6.05 0 .05.02.05.23 0 .6.06 2.37.12 3.57.22 4.33.75 9.23 1.53 14.32l.14.87v1.78l-.22.39a26.68 26.68 0 0 1-5.14 6.38 25.7 25.7 0 0 1-5.71 3.93l-.61.3h-14.78l-14.78.01zM764 979.5c0-3.5.01-6.36.02-6.36l.16.25a3.98 3.98 0 0 0 1.65 1.47l.15.06-.01.6c-.06 2.4-.4 4.9-.98 7.22-.22.87-.65 2.27-.9 2.92l-.08.2zM762.28 982.54a117.35 117.35 0 0 1-1.03-12.66c-.02-.46-.03-3.2-.03-6.27v-5.45h1.11v24.68l-.05-.3z"/>
      <path fill="#fff" d="M761.22 948.44v-9.72h1.11v19.44h-1.11zM761.22 928.1v-10.6h1.11v21.22h-1.11zM761.22 908.66v-8.83h1.11v17.67h-1.11zM760.35 910.58l-.02-15.12v-1.47h.2v16.6h-.18z"/>
      <path fill="#fff" d="M760.36 917.72v-7.14h.18v8.75h-.18zM760.38 924.8l-.01-5.3-.01-.17H760.53V929.95H760.38zM760.4 936.38l-.01-5v-1.42h.14v10h-.13zM760.4 945.65V939.96h.14v8.75h-.13zM760.42 956.12v-4.06l-.01-3.35h.12v8.12h-.1z"/>
      <path fill="#fff" d="M760.43 964.9v-8.07h.11v9.38h-.11z"/>
      <path fill="#fff" d="M760.44 969.3v-2.8l-.01-.3h.1v2.04a14.38 14.38 0 0 1 0 .54h-.05c-.02.03-.03.29-.03 1.61v-1.1zM761.22 898.54v-8.3h1.11v9.59h-1.11V898.53zM760.33 893.34l-.01-4.69v-4.04H760.52V894h-.2zM761.21 885.24v-5h1.12v10h-1.12zM760.31 882.88v-6.39h.22v8.12H760.32zM761.21 875.55v-4.69h1.12V880.24h-1.12zM760.3 874.84v-2.81l-.01-1.17h.25V876.48h-.24z"/>
      <path fill="#fff" d="M761.21 867.11v-3.75h1.12v7.5h-1.12zM760.29 868.1v-4.74h.24v7.5H760.3zM760.28 861.95v-4.38l-.01-2.96h.26v8.75h-.24zM761.21 858.99v-4.38h1.12v8.75h-1.12zM760.27 852.27V846.49h.26v8.12h-.26zM761.21 850.55v-4.06h1.12v8.12h-1.12z"/>
      <path fill="#fff" d="M761.21 841.8v-4.69h1.12V846.5h-1.12zM760.26 846.25l-.01-4.68v-4.46h.28V846.5h-.27zM760.24 835.8V830.23H760.52v6.87h-.28zM761.21 833.68v-3.44h1.12v6.87h-1.12z"/>
      <path fill="#fff" d="M761.21 825.55v-4.69h1.12V830.24h-1.12zM760.23 828.9v-4.69l-.01-3.35h.32V830.24h-.31z"/>
      <path fill="#fff" d="M760.22 820.1v-3.75l-.01-2.99h.33v7.5h-.32zM761.21 817.11v-3.75h1.12v7.5h-1.12zM761.21 809.3v-4.06h1.12v8.12h-1.12zM760.2 810.56V805.24h.33v8.12h-.32zM760.2 804.4l-.01-4.06v-3.23h.34V805.24h-.33zM761.21 801.18v-4.07h1.12V805.24h-1.12z"/>
      <path fill="#fff" d="M761.21 792.74v-4.38h1.12v8.75h-1.12zM760.18 793.94v-5.58h.35v8.75h-.35zM760.17 786.57v-3.75l-.01-1.96h.38v7.5h-.37zM761.21 784.61v-3.75h1.12v7.5h-1.12zM761.21 776.49v-4.38h1.12v8.75h-1.12zM760.16 778.24l-.01-4.37v-1.76h.39v8.75h-.38zM760.14 770.9v-6.91h.4v8.12h-.4z"/>
      <path fill="#fff" d="M761.21 768.05V764h1.12v8.12h-1.12zM760.13 762.55v-4.69l-.01-3.25H760.53V764h-.4zM761.21 759.3v-4.69h1.12V764h-1.12z"/>
      <path fill="#fff" d="M760.12 752.08v-4.06l-.01-1.53h.42v8.12h-.4zM761.21 750.55v-4.06h1.12v8.12h-1.12z"/>
      <path fill="#fff" d="M761.21 741.8v-4.69h1.12V746.5h-1.12zM760.1 745.18v-8.07h.44V746.5h-.43z"/>
      <path fill="#fff" d="M760.1 736.39l-.01-4.38v-3.65h.45v8.75h-.44zM761.21 732.74v-4.38h1.12v8.75h-1.12zM761.21 724.3v-4.06h1.12v8.12h-1.12zM760.08 725.92v-4.06l-.01-1.62h.46v8.12h-.45zM760.07 718.38v-3.44l-.01-1.58h.48v6.88h-.47zM761.21 716.8v-3.44h1.12v6.88h-1.12z"/>
      <path fill="#fff" d="M761.21 709.22v-4.15l.04.06c.28.49.59 1.07.89 1.66l.19.38v6.2h-1.12zM760.06 710.23l-.01-5v-1.87h.13l.05.08.18.29.12.2v9.43h-.47zM760.04 703.34c0-.02-.13-.18-.66-.86l-1-1.24a29.21 29.21 0 0 0-5.88-5.3l-.12-.08h.52l.16.1c2.42 1.45 4.8 3.9 6.92 7.1l.2.3h-.14zM762.27 704.18l-.46-.78a31.91 31.91 0 0 0-3.58-4.84 20.48 20.48 0 0 0-2.77-2.6l-.13-.1h1.79l.03.06c.36.54.95 1.13 1.63 1.64.94.7 2.2 1.38 3.5 1.86l.05.02v4.84l-.06-.1zM754.84 695.48a16.3 16.3 0 0 0-1.5-.95 9.8 9.8 0 0 1 1.53-.05h1.6l.1.3c.1.32.3.75.44.95l.09.12h-1.75z"/>
      <path fill="#fff" d="M751.92 695.62c-.48-.25-.77-.3-1.76-.38-3.44-.26-17.43-.37-51.83-.43l-17.3-.03v-.3h68.26l.45.1c.96.24 2.24.75 2.94 1.18l.15.1-.24-.02c-.2 0-.33-.04-.67-.22z"/>
      <path fill="#fff" d="M731.97 700.24v-5.31h.8a1930.43 1930.43 0 0 1 6.8.06h.57-.48l-7.32-.07h-.37v-.44h17.33l.32.08a12.4 12.4 0 0 1 3.2 1.29l-.38-.02a1.05 1.05 0 0 1-.27-.1l.1.07.12.07h.51l.17.1a20.77 20.77 0 0 1 5.54 5.17 31.21 31.21 0 0 1 1.88 2.73l.04.05v1.63h-28.56zm27.42 2.25l-.01-.01c-.02-.01-.02-.01 0 0 0 .01.01.02.01 0zm-.18-.23l-.01-.01c-.02-.01-.02-.01 0 0 0 .02.01.02.01.01zm-.72-.9h-.01c-.01-.02-.02-.02 0 0h.01zm-.33-.4l-.02-.01-.02-.02.01.02.03.02zm-.06-.06l-.01-.01c-.02-.01-.02 0 0 0 0 .02.01.02.01.01zm-.05-.06l-.02-.01c-.01-.01-.01-.01 0 0l.02.01zm-.11-.12l-.02-.02-.02-.02.02.02.02.02zm-.07-.07l-.01-.02-.02-.02.01.02.02.02zm-.07-.08l-.01-.02c-.01 0-.01 0 0 0l.01.02zm-.06-.07l-.02-.02-.02-.02.02.02.02.02zm-.08-.1l-.02-.01c-.01-.01-.01 0 0 0 0 .02.02.02.02.01zm-.18-.2h-.02c-.01-.02-.01-.01 0 0h.02zm-1.54-1.53a.28.28 0 0 0-.03-.04s0 .02.03.04l.03.03-.03-.03zm-.1-.1l-.02-.02-.03-.02.02.02.03.03zm-.1-.09a.3.3 0 0 0-.03-.03l-.03-.02.03.03.03.02zm-.1-.1l-.02-.01c-.01-.01-.01-.01 0 0l.01.01zm-.09-.07l-.02-.02-.02-.02.02.02.02.02zm-.07-.07l-.03-.02-.02-.02.02.02.03.02zm-.09-.08l-.02-.02-.02-.01.02.02.02.01zm-.07-.06l-.02-.02-.02-.01.02.01.02.02zm-.07-.06l-.02-.02-.02-.02.02.02.02.02zm-.07-.07l-.01-.01c-.02-.01-.02 0 0 0v.01zm-.06-.05l-.02-.01c-.01-.01-.01-.01 0 0s.02.02.02 0zm-4.1-2.6h-.01c-.01 0 0 0 0 0h.01zm-.05 0h-.02c-.01 0 0 0 0 0h.02zm-.06-.01h-.03.03zm-.05-.01h-.03c-.01 0 0 0 0 0h.03zm-.07 0h-.03c-.01 0 0 0 0 0h.03zm-.07-.02h-.02.02zm-.08 0h-.04.04zm-.08-.01h-.02.02zm-.09-.01h-.02.02zm-.09 0H750.35h.03zm-.1-.02H750.26h.02zm-.09 0zm-.5-.04h-.03.04zm-.14 0H749.51h.04zm-.15-.01H749.36h.04zm-.16-.01h-.04.04zm-.17 0h-.04.04zm-.18-.02h-.05.05zm-.2 0a.8.8 0 0 0-.1 0h.11zm-.2-.01h-.05.05zm-.22-.01h-.05.05zm-.23 0zm-.25-.02zm-.24 0zm-.28-.01zm-.3-.01zm-.3 0zm-.33-.02zm-.33 0zm-.36-.01zm-.39-.01zm-.4 0zm-.43-.02zm-.45 0zm-.5-.01zm-.49-.01zm-.54 0zm-.56-.02zm-.6 0zm-.64-.01z"/>
      <path fill="#fff" d="M731.97 700.24v-5.31h1.06-1.06v-.45h17.34l.3.08a10.76 10.76 0 0 1 3.2 1.29l-.37-.02a1.29 1.29 0 0 1-.25-.08l.1.06.1.06h.52l.12.07c2.36 1.42 4.61 3.69 6.7 6.75a7.3 7.3 0 0 1 .43.68c.02 0 .04.04.25.36l.12.2v1.62h-28.56zm18.2-5h-.02.02zm-.1-.01h-.05.05zm-.12 0h-.02.02zm-.12-.02h-.02.02zm-10.61-.23zm-.79 0zm-.8-.02zm-.86 0zm-.89-.01zm-.96-.01zm-1.05 0z"/>
      <path fill="#fff" d="M752.3 695.81a1.25 1.25 0 0 1-.09-.05l.06.02c.12.05.19.06.33.06h.23l-.28-.16a12.43 12.43 0 0 0-2.94-1.12l-.3-.08h-7.08v-.02h7l.1.02a10.87 10.87 0 0 1 3.57 1.38h-.52l-.08-.05zM759.57 700.14a31.05 31.05 0 0 0-1.6-1.86 20.88 20.88 0 0 0-2.54-2.33l-.1-.08h1.79l.01.02a7.79 7.79 0 0 0 1.12 1.23c.66.58 1.45 1.1 2.47 1.62l.16.08v1.34h-1.3z"/>
      <path fill="#fff" d="M759.53 700.1a27.95 27.95 0 0 0-2.6-2.87 20.94 20.94 0 0 0-1.6-1.36h1.79l.04.07c.3.42.75.9 1.26 1.33a11.68 11.68 0 0 0 2.45 1.54v1.35h-1.29zM755.27 695.82a17.28 17.28 0 0 0-2.1-1.35h3.32l.02.07a4.13 4.13 0 0 0 .59 1.3l.02.02h-1.8zm1.78-.04a4.96 4.96 0 0 1-.52-1.1l-.06-.2h-.95a54.58 54.58 0 0 0-2.19.05l.24.14a15.64 15.64 0 0 1 1.54 1.01l.24.17h1.75zM681.87 694.79a22037.34 22037.34 0 0 0-17.26-.02h-.03v-.31H675l10.43.01-2.2.01h-2.2V694.77h.49a368.05 368.05 0 0 0 3.59.02h.32-3.56zM605.04 694.74h-17.8v-.28h41.71V694.75h-3.06l-20.85-.01zM654.68 694.76h-5.87v-.3h15.77v.31h-2.01l-7.89-.01z"/>
      <path fill="#fff" d="M578.57 694.73h-6.18v-.27h14.86v.28H586l-7.43-.01zM545.85 694.6v-.14h26.54v.26h-26.54zM507.64 694.6v-.14h38.2v.26h-38.2zM362.7 694.59v-.13h14.75v.26H362.7zM304.61 694.59v-.13h14.74v.25h-14.74zM240.95 694.59v-.13h14.74v.25h-14.74zM191.08 694.58v-.12h14.74v.25h-14.74zM125.34 694.59v-.13h8.59v.25h-8.59z"/>
    </g>

    <Basket basketName="basketOne" />
    <Basket basketName="basketTwo" transform="translate(353, 0)" />
  </g>
);

export default EquipmentTable;