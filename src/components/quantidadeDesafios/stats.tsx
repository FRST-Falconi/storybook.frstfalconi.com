import * as S from './quantidadeDesafios'

export const Stats = ({
  definicao = null,
  hipoteses = null,
  testes = null,
  resultados = null,
  proximosPassos = null
}) => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 719 151" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M153.191 43.0903C153.21 43.0563 153.228 43.0223 153.245 42.9882C153.277 42.9361 153.307 42.8833 153.337 42.83C158.489 33.6471 165.889 25.883 174.877 20.288C185.402 13.7372 197.632 10.4542 210.022 10.8544C222.412 11.2545 234.406 15.3197 244.485 22.536C251.825 27.7905 257.91 34.5438 262.363 42.3057C262.461 42.5913 262.584 42.8726 262.733 43.1468C264.894 47.1282 267.046 52.5576 269.401 59.0696C270.335 61.6514 271.318 64.4553 272.34 67.3699L272.341 67.3712C273.806 71.5492 275.351 75.9548 276.944 80.2594C282.399 94.9999 289.259 111.007 299.243 122.165C299.487 122.438 299.753 122.68 300.035 122.892C302.858 125.93 305.945 128.736 309.269 131.274C320.431 139.796 333.8 144.942 347.795 146.104C361.79 147.265 375.824 144.393 388.238 137.827C399.069 132.098 408.271 123.767 415.035 113.617C416.676 111.155 415.753 107.874 413.179 106.417C410.604 104.96 407.354 105.881 405.683 108.323C399.948 116.7 392.25 123.585 383.229 128.357C372.625 133.966 360.636 136.419 348.681 135.427C336.726 134.435 325.305 130.039 315.771 122.759C312.889 120.559 310.217 118.124 307.777 115.485C307.644 115.291 307.498 115.104 307.337 114.924C298.858 105.448 292.576 91.2105 287.129 76.4904C285.534 72.1796 284.081 68.0329 282.664 63.9902L282.663 63.9866L282.66 63.9775C281.639 61.064 280.637 58.2044 279.614 55.3762C278.118 51.2379 276.61 47.2654 275.047 43.6966C274.972 43.3245 274.852 42.9538 274.684 42.5907C269.357 31.0977 261.134 21.1465 250.785 13.7369C238.965 5.27468 224.901 0.50754 210.371 0.0383122C195.842 -0.430916 181.5 3.41884 169.159 11.1008C158.697 17.6128 150.071 26.6308 144.035 37.2944C143.894 37.4878 143.764 37.6928 143.647 37.9089C141.055 42.6827 138.662 48.8382 136.295 55.4174C135.26 58.2959 134.247 61.2052 133.214 64.1708L133.213 64.174L133.212 64.1748L133.212 64.1753C131.799 68.2328 130.349 72.3957 128.756 76.7291C123.288 91.5999 116.988 105.968 108.517 115.436C108.354 115.619 108.205 115.809 108.071 116.006C105.633 118.641 102.963 121.074 100.085 123.272C90.5502 130.552 79.1296 134.948 67.1746 135.94C55.2196 136.932 43.2307 134.478 32.6265 128.87C23.6051 124.098 15.9073 117.213 10.1725 108.836C8.5013 106.394 5.25138 105.473 2.67667 106.93C0.101948 108.387 -0.820185 111.668 0.820474 114.13C7.58463 124.279 16.7862 132.611 27.6175 138.34C40.0311 144.906 54.0658 147.778 68.0607 146.616C82.0555 145.455 95.4248 140.309 106.586 131.787C109.912 129.247 113.001 126.44 115.825 123.4C116.105 123.19 116.368 122.949 116.61 122.678C126.601 111.512 133.479 95.3513 138.949 80.477C140.535 76.1623 142.077 71.7397 143.539 67.5447L143.541 67.5401L143.543 67.5344L143.543 67.5337C144.577 64.5665 145.572 61.7135 146.515 59.0933C148.877 52.5264 151.033 47.0665 153.191 43.0903Z" fill="url(#paint0_linear_576_26707)" />
      <g filter="url(#filter0_d_576_26707)">
        <circle cx="61.562" cy="74.564" r="50.5581" fill="white" />
      </g>
        <S.DataTitle x={60} y={79} fill='#222' font-size="12">
          {definicao?.count}
        </S.DataTitle>
        <S.DataSubTitle x={60} y={101} fill='#222' font-size="10">
          {definicao?.percentage}
        </S.DataSubTitle>
      <g filter="url(#filter1_d_576_26707)">
        <circle cx="353.562" cy="74.564" r="50.5581" fill="white" />
      </g>
        <S.DataTitle x={353} y={79} fill='#222' font-size="12">
          {testes?.count}
        </S.DataTitle>
        <S.DataSubTitle x={353} y={101} fill='#222' font-size="10">
          {testes?.percentage}
        </S.DataSubTitle>
      <g filter="url(#filter2_d_576_26707)">
        <circle cx="645.562" cy="74.564" r="50.5581" fill="white" />
      </g>
        <S.DataTitle x={645} y={79} fill='#222' font-size="12">
          {proximosPassos?.count}
        </S.DataTitle>
        <S.DataSubTitle x={645} y={101} fill='#222' font-size="10">
          {proximosPassos?.percentage}
        </S.DataSubTitle>
      <g filter="url(#filter3_d_576_26707)">
        <circle cx="207.562" cy="73.565" r="50.5581" fill="white" />
      </g>
        <S.DataTitle x={208} y={79} fill='#222' font-size="12">
          {hipoteses?.count}
        </S.DataTitle>
        <S.DataSubTitle x={208} y={101} fill='#222' font-size="10">
          {hipoteses?.percentage}
        </S.DataSubTitle>
      <g filter="url(#filter4_d_576_26707)">
        <circle cx="499.562" cy="73.565" r="50.5581" fill="white" />
      </g>
        <S.DataTitle x={500} y={79} fill='#222' font-size="12">
          {resultados?.count}
        </S.DataTitle>
        <S.DataSubTitle x={500} y={101} fill='#222' font-size="10">
          {resultados?.percentage}
        </S.DataSubTitle>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M294.675 42.9438C292.1 41.4867 291.178 38.2055 292.819 35.7437C298.339 27.4598 305.497 20.3675 313.87 14.9146C323.742 8.48533 335.016 4.52345 346.74 3.36288C358.464 2.20231 370.295 3.87705 381.236 8.24596C389.713 11.6306 397.463 16.5554 404.104 22.7486L410.79 16.9156L415.748 42.1779L391.391 33.84L395.981 29.8356C390.492 24.8959 384.159 20.949 377.263 18.1954C367.917 14.4633 357.81 13.0327 347.795 14.0241C337.78 15.0155 328.15 18.3999 319.716 23.8921C312.783 28.4076 306.825 34.2391 302.17 41.0381C300.499 43.4793 297.249 44.4008 294.675 42.9438Z" fill="url(#paint1_linear_576_26707)" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.67667 42.9438C0.101951 41.4867 -0.820191 38.2055 0.82048 35.7437C6.34132 27.4598 13.4987 20.3675 21.8719 14.9146C31.7443 8.48533 43.0176 4.52346 54.7416 3.36288C66.4656 2.20231 78.2969 3.87705 89.2382 8.24597C97.7138 11.6303 105.463 16.5545 112.105 22.7469L118.789 16.9156L123.746 42.1779L99.3894 33.84L103.981 29.8339C98.493 24.895 92.1606 20.9487 85.2654 18.1954C75.9188 14.4634 65.8121 13.0327 55.797 14.0241C45.7818 15.0155 36.1517 18.3999 27.7183 23.8921C20.7846 28.4076 14.8268 34.2391 10.1724 41.0381C8.50128 43.4793 5.25138 44.4008 2.67667 42.9438Z" fill="url(#paint2_linear_576_26707)" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M586.675 42.9438C584.1 41.4867 583.178 38.2055 584.819 35.7437C590.339 27.4598 597.497 20.3675 605.87 14.9146C615.742 8.48533 627.016 4.52345 638.74 3.36288C650.464 2.20231 662.295 3.87705 673.236 8.24596C681.713 11.6306 689.463 16.5554 696.104 22.7486L702.79 16.9156L707.748 42.1779L683.391 33.84L687.981 29.8356C682.492 24.8959 676.159 20.949 669.263 18.1954C659.917 14.4633 649.81 13.0327 639.795 14.0241C629.78 15.0155 620.15 18.3999 611.716 23.8921C604.783 28.4076 598.825 34.2391 594.17 41.0381C592.499 43.4793 589.249 44.4008 586.675 42.9438Z" fill="url(#paint3_linear_576_26707)" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M440.675 110.705C438.1 112.162 437.178 115.443 438.819 117.905C444.339 126.189 451.497 133.281 459.87 138.734C469.742 145.163 481.016 149.125 492.74 150.286C504.464 151.446 516.295 149.771 527.236 145.402C535.713 142.018 543.463 137.093 550.104 130.9L556.79 136.733L561.748 111.471L537.391 119.808L541.981 123.813C536.492 128.753 530.159 132.699 523.263 135.453C513.917 139.185 503.81 140.616 493.795 139.624C483.78 138.633 474.15 135.249 465.716 129.756C458.783 125.241 452.825 119.409 448.17 112.61C446.499 110.169 443.249 109.248 440.675 110.705Z" fill="url(#paint4_linear_576_26707)" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M148.675 110.705C146.1 112.162 145.178 115.443 146.819 117.905C152.339 126.189 159.497 133.281 167.87 138.734C177.742 145.163 189.016 149.125 200.74 150.286C212.464 151.446 224.295 149.771 235.236 145.402C243.712 142.018 251.462 137.093 258.104 130.9L264.789 136.733L269.747 111.471L245.39 119.808L249.981 123.813C244.492 128.753 238.159 132.699 231.263 135.453C221.917 139.185 211.81 140.616 201.795 139.624C191.78 138.633 182.15 135.249 173.716 129.756C166.783 125.241 160.825 119.409 156.17 112.61C154.499 110.169 151.249 109.248 148.675 110.705Z" fill="url(#paint5_linear_576_26707)" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M445.193 43.09C445.211 43.0561 445.229 43.0221 445.247 42.9879C445.278 42.9358 445.309 42.8831 445.339 42.8298C450.491 33.6469 457.89 25.8827 466.879 20.2878C477.403 13.7369 489.634 10.454 502.024 10.8541C514.414 11.2542 526.407 15.3195 536.487 22.5358C543.826 27.7902 549.911 34.5434 554.365 42.3052C554.463 42.591 554.585 42.8724 554.734 43.1467C556.896 47.1281 559.048 52.5576 561.403 59.0696C562.337 61.6513 563.32 64.4552 564.342 67.3699L564.343 67.3711C565.808 71.5492 567.353 75.9547 568.946 80.2594C574.401 94.9998 581.261 111.007 591.245 122.165C591.489 122.438 591.755 122.68 592.036 122.892C594.86 125.93 597.947 128.736 601.271 131.274C612.432 139.796 625.802 144.942 639.796 146.103C653.791 147.265 667.826 144.393 680.24 137.827C691.071 132.098 700.272 123.767 707.037 113.617C708.677 111.155 707.755 107.874 705.18 106.417C702.606 104.96 699.356 105.881 697.685 108.323C691.95 116.7 684.252 123.585 675.231 128.357C664.626 133.965 652.637 136.419 640.682 135.427C628.727 134.435 617.307 130.039 607.772 122.759C604.891 120.559 602.219 118.124 599.779 115.485C599.646 115.291 599.499 115.103 599.339 114.924C590.86 105.448 584.578 91.2105 579.131 76.4903C577.536 72.1795 576.083 68.0328 574.666 63.9901L574.665 63.9865L574.662 63.9774C573.641 61.0639 572.639 58.2043 571.616 55.3761C570.12 51.2379 568.612 47.2654 567.049 43.6967C566.974 43.3244 566.854 42.9537 566.686 42.5905C561.359 31.0975 553.136 21.1463 542.787 13.7367C530.967 5.27444 516.903 0.507296 502.373 0.0380681C487.844 -0.43116 473.502 3.4186 461.16 11.1005C450.698 17.6126 442.073 26.6306 436.037 37.2942C435.896 37.4876 435.766 37.6926 435.648 37.9087C433.057 42.6825 430.664 48.838 428.297 55.4171C427.262 58.2958 426.248 61.2053 425.215 64.1709L425.214 64.1738L425.214 64.1746L425.214 64.175C423.801 68.2326 422.351 72.3955 420.757 76.7289C415.289 91.5997 408.99 105.968 400.519 115.436C400.358 115.616 400.211 115.804 400.078 115.998C397.638 118.636 394.966 121.071 392.085 123.271C382.55 130.551 371.13 134.947 359.175 135.939C347.22 136.932 335.231 134.478 324.626 128.869C315.605 124.098 307.907 117.213 302.172 108.835C300.501 106.394 297.251 105.472 294.677 106.93C292.102 108.387 291.18 111.668 292.82 114.13C299.585 124.279 308.786 132.611 319.618 138.34C332.031 144.905 346.066 147.778 360.061 146.616C374.056 145.455 387.425 140.308 398.586 131.786C401.911 129.248 404.997 126.442 407.821 123.404C408.103 123.193 408.368 122.951 408.612 122.678C418.603 111.512 425.481 95.3511 430.95 80.4768C432.537 76.1621 434.079 71.7395 435.541 67.5445L435.543 67.5399L435.545 67.5342L435.545 67.5334C436.579 64.5663 437.574 61.7133 438.516 59.0931C440.879 52.5262 443.034 47.0663 445.193 43.09Z" fill="url(#paint6_linear_576_26707)" />
      <path d="M714.28 93.5678L711.947 119.206L690.91 104.366L714.28 93.5678Z" fill="#FF9934" />
      <defs>
        <filter id="filter0_d_576_26707" x="7.00391" y="24.0059" width="109.117" height="109.116" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_576_26707" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_576_26707" result="shape" />
        </filter>
        <filter id="filter1_d_576_26707" x="299.004" y="24.0059" width="109.117" height="109.116" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_576_26707" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_576_26707" result="shape" />
        </filter>
        <filter id="filter2_d_576_26707" x="591.004" y="24.0059" width="109.117" height="109.116" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_576_26707" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_576_26707" result="shape" />
        </filter>
        <filter id="filter3_d_576_26707" x="153.004" y="23.0068" width="109.117" height="109.116" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_576_26707" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_576_26707" result="shape" />
        </filter>
        <filter id="filter4_d_576_26707" x="445.004" y="23.0068" width="109.117" height="109.116" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_576_26707" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_576_26707" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_576_26707" x1="285.498" y1="0" x2="2.83459" y2="100.645" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FF9934" />
          <stop offset="0.220452" stop-color="#F26818" />
          <stop offset="0.56498" stop-color="#FF9934" />
          <stop offset="0.942956" stop-color="#F26818" />
        </linearGradient>
        <linearGradient id="paint1_linear_576_26707" x1="391.884" y1="92.1548" x2="205.788" y2="92.1548" gradientUnits="userSpaceOnUse">
          <stop stop-color="#F46E1D" />
          <stop offset="0.575197" stop-color="#FF9934" />
          <stop offset="0.865824" stop-color="#FF9934" />
        </linearGradient>
        <linearGradient id="paint2_linear_576_26707" x1="130.628" y1="92.1548" x2="-120.195" y2="92.1548" gradientUnits="userSpaceOnUse">
          <stop offset="0.176509" stop-color="#F26818" />
          <stop offset="0.462825" stop-color="#FF9934" />
          <stop offset="1" stop-color="#FF9934" />
        </linearGradient>
        <linearGradient id="paint3_linear_576_26707" x1="708.157" y1="92.1553" x2="475.891" y2="98.5772" gradientUnits="userSpaceOnUse">
          <stop offset="0.123715" stop-color="#F26818" />
          <stop offset="0.597062" stop-color="#FF9934" />
          <stop offset="0.919352" stop-color="#FF9934" />
        </linearGradient>
        <linearGradient id="paint4_linear_576_26707" x1="340.461" y1="137.388" x2="571.057" y2="137.388" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FE933C" />
          <stop offset="0.555386" stop-color="#FF9934" />
          <stop offset="0.958184" stop-color="#F26818" />
        </linearGradient>
        <linearGradient id="paint5_linear_576_26707" x1="69.4981" y1="137.388" x2="257.211" y2="137.388" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FE933C" />
          <stop offset="0.514298" stop-color="#FE933C" />
          <stop offset="1" stop-color="#F26818" />
        </linearGradient>
        <linearGradient id="paint6_linear_576_26707" x1="439.612" y1="-0.000423512" x2="531.394" y2="-32.7864" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FF9934" />
          <stop offset="0.45849" stop-color="#F26818" />
          <stop offset="0.973031" stop-color="#FF9934" />
        </linearGradient>
      </defs>
    </svg>

  )
}