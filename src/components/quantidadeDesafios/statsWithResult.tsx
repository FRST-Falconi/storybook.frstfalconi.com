import React from 'react'
import * as S from './quantidadeDesafios'

export const StatsWithResult = ({
  definicao = null,
  hipoteses = null,
  testes = null,
  resultados = null,
  proximosPassos = null,
  finalizados = null
}) => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 856 151" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M153.193 43.0901C153.215 43.0493 153.237 43.0084 153.258 42.9673C153.273 42.9407 153.289 42.9139 153.305 42.887C153.315 42.8681 153.326 42.8491 153.337 42.83C158.489 33.6471 165.888 25.883 174.877 20.288C185.401 13.7372 197.632 10.4542 210.022 10.8544C222.412 11.2545 234.405 15.3197 244.485 22.536C251.824 27.7905 257.909 34.5438 262.363 42.3055C262.461 42.5912 262.584 42.8726 262.732 43.1468C264.894 47.1282 267.046 52.5576 269.401 59.0697C270.335 61.6514 271.318 64.4553 272.34 67.3699L272.341 67.371C273.806 71.5491 275.351 75.9547 276.944 80.2595C282.398 94.9999 289.259 111.007 299.243 122.165C299.487 122.438 299.752 122.68 300.033 122.891C302.857 125.929 305.944 128.735 309.268 131.274C320.43 139.796 333.799 144.942 347.794 146.104C361.789 147.265 375.824 144.393 388.237 137.827C399.069 132.098 408.27 123.767 415.034 113.617C416.675 111.155 415.753 107.874 413.178 106.417C410.603 104.96 407.353 105.881 405.682 108.323C399.947 116.7 392.25 123.585 383.228 128.357C372.624 133.966 360.635 136.419 348.68 135.427C336.725 134.435 325.305 130.039 315.77 122.759C312.889 120.559 310.217 118.124 307.778 115.486C307.645 115.292 307.498 115.104 307.337 114.924C298.858 105.448 292.576 91.2105 287.129 76.4904C285.534 72.1796 284.081 68.0329 282.664 63.9902L282.663 63.9865C281.641 61.0699 280.638 58.2073 279.614 55.3762C278.117 51.2379 276.61 47.2655 275.047 43.6967C274.972 43.3245 274.852 42.9539 274.684 42.5907C269.357 31.0977 261.134 21.1465 250.785 13.7369C238.965 5.27468 224.901 0.50754 210.371 0.0383122C195.842 -0.430916 181.5 3.41884 169.158 11.1008C158.693 17.615 150.065 26.6369 144.029 37.3051C143.891 37.4953 143.764 37.6966 143.648 37.9087C141.057 42.6825 138.664 48.838 136.297 55.4172C135.261 58.2967 134.248 61.207 133.214 64.1735L133.214 64.1746L133.214 64.1751C131.801 68.2327 130.351 72.3955 128.757 76.7289C123.289 91.5998 116.99 105.968 108.518 115.436C108.358 115.616 108.211 115.804 108.078 115.997C105.638 118.636 102.966 121.071 100.085 123.271C90.5502 130.551 79.1296 134.947 67.1746 135.939C55.2196 136.931 43.2307 134.478 32.6265 128.869C23.6051 124.098 15.9073 117.212 10.1725 108.835C8.5013 106.394 5.25138 105.472 2.67666 106.929C0.101948 108.386 -0.820185 111.668 0.820474 114.129C7.58463 124.279 16.7862 132.611 27.6175 138.339C40.0311 144.905 54.0658 147.777 68.0607 146.616C82.0555 145.455 95.4248 140.308 106.586 131.786C109.91 129.248 112.997 126.442 115.82 123.405C116.102 123.193 116.368 122.951 116.612 122.678C126.603 111.512 133.481 95.3511 138.95 80.4768C140.538 76.1587 142.081 71.7324 143.544 67.5344L143.545 67.5335L143.545 67.533C144.579 64.566 145.574 61.7132 146.516 59.0931C148.878 52.5262 151.034 47.0663 153.193 43.0901Z" fill="url(#paint0_linear_3329_15074)"/>
        <g filter="url(#filter0_d_3329_15074)">
          <circle cx="61.562" cy="74.564" r="50.5581" fill="white"/>
        </g>
          <S.DataTitle x={60} y={79} fill='#222' font-size="12">
            {definicao?.count}
          </S.DataTitle>
          <S.DataSubTitle x={64} y={101} fill='#222' font-size="10">
            {definicao?.percentage}
          </S.DataSubTitle>
        
        <g filter="url(#filter1_d_3329_15074)">
          <circle cx="353.562" cy="74.564" r="50.5581" fill="white"/>
        </g>
          <S.DataTitle x={353} y={79} fill='#222' font-size="12">
            {testes?.count}
          </S.DataTitle>
          <S.DataSubTitle x={357} y={101} fill='#222' font-size="10">
            {testes?.percentage}
          </S.DataSubTitle>

        <g filter="url(#filter2_d_3329_15074)">
          <circle cx="645.562" cy="74.564" r="50.5581" fill="white"/>
        </g>
          <S.DataTitle x={645} y={79} fill='#222' font-size="12">
            {proximosPassos?.count}
          </S.DataTitle>
          <S.DataSubTitle x={649} y={101} fill='#222' font-size="10">
            {proximosPassos?.percentage}
          </S.DataSubTitle>
        
        <g filter="url(#filter3_d_3329_15074)">
          <circle cx="207.562" cy="73.5659" r="50.5581" fill="white"/>
        </g>
          <S.DataTitle x={208} y={79} fill='#222' font-size="12">
            {hipoteses?.count}
          </S.DataTitle>
          <S.DataSubTitle x={212} y={101} fill='#222' font-size="10">
            {hipoteses?.percentage}
          </S.DataSubTitle>

        <g filter="url(#filter4_d_3329_15074)">
          <circle cx="499.562" cy="73.5659" r="50.5581" fill="white"/>
        </g>
          <S.DataTitle x={500} y={79} fill='#222' font-size="12">
            {resultados?.count}
          </S.DataTitle>
          <S.DataSubTitle x={504} y={101} fill='#222' font-size="10">
            {resultados?.percentage}
          </S.DataSubTitle>
        
        <g filter="url(#filter5_d_3329_15074)">
          <circle cx="791.562" cy="73.5659" r="50.5581" fill="white"/>
        </g>
          <S.DataTitle x={790} y={79} fill='#222' font-size="12">
            {finalizados?.count}
          </S.DataTitle>
          <S.DataSubTitle x={794} y={101} fill='#222' font-size="10">
            {finalizados?.percentage}
          </S.DataSubTitle>
        
      <path fill-rule="evenodd" clip-rule="evenodd" d="M294.677 42.9443C292.102 41.4872 291.18 38.206 292.82 35.7442C298.341 27.4603 305.499 20.368 313.872 14.9151C323.744 8.48582 335.018 4.52394 346.742 3.36337C358.466 2.2028 370.297 3.87754 381.238 8.24645C389.714 11.6308 397.463 16.5551 404.105 22.7475L410.789 16.9159L415.747 42.1782L391.39 33.8403L395.981 29.8346C390.493 24.8956 384.161 20.9492 377.265 18.1959C367.919 14.4638 357.812 13.0332 347.797 14.0246C337.782 15.016 328.152 18.4004 319.718 23.8926C312.785 28.4081 306.827 34.2396 302.172 41.0386C300.501 43.4798 297.251 44.4013 294.677 42.9443Z" fill="url(#paint1_linear_3329_15074)"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.67667 42.9443C0.10195 41.4872 -0.820189 38.206 0.82048 35.7442C6.34133 27.4603 13.4987 20.368 21.8719 14.9151C31.7443 8.48582 43.0176 4.52394 54.7416 3.36337C66.4656 2.2028 78.2969 3.87754 89.2382 8.24645C97.7139 11.6308 105.463 16.5551 112.105 22.7475L118.789 16.9159L123.747 42.1782L99.3901 33.8403L103.981 29.8346C98.4931 24.8956 92.1606 20.9492 85.2654 18.1959C75.9188 14.4638 65.8121 13.0332 55.797 14.0246C45.7818 15.016 36.1517 18.4004 27.7183 23.8926C20.7846 28.4081 14.8268 34.2396 10.1724 41.0386C8.50128 43.4798 5.25138 44.4013 2.67667 42.9443Z" fill="url(#paint2_linear_3329_15074)"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M586.677 42.9443C584.102 41.4872 583.18 38.206 584.82 35.7442C590.341 27.4603 597.499 20.368 605.872 14.9151C615.744 8.48582 627.018 4.52394 638.742 3.36337C650.466 2.2028 662.297 3.87754 673.238 8.24645C681.714 11.6308 689.463 16.5552 696.105 22.7477L702.789 16.916L707.747 42.1784L683.39 33.8404L687.982 29.8347C682.493 24.8957 676.161 20.9493 669.265 18.1959C659.919 14.4638 649.812 13.0332 639.797 14.0246C629.782 15.016 620.152 18.4004 611.718 23.8926C604.785 28.4081 598.827 34.2396 594.172 41.0386C592.501 43.4798 589.251 44.4013 586.677 42.9443Z" fill="url(#paint3_linear_3329_15074)"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M440.677 110.704C438.102 112.161 437.18 115.442 438.82 117.904C444.341 126.188 451.499 133.28 459.872 138.733C469.744 145.163 481.018 149.124 492.742 150.285C504.466 151.446 516.297 149.771 527.238 145.402C535.714 142.018 543.463 137.093 550.105 130.901L556.789 136.733L561.747 111.47L537.39 119.808L541.981 123.814C536.493 128.753 530.161 132.699 523.265 135.453C513.919 139.185 503.812 140.615 493.797 139.624C483.782 138.632 474.152 135.248 465.718 129.756C458.785 125.24 452.827 119.409 448.172 112.61C446.501 110.169 443.251 109.247 440.677 110.704Z" fill="url(#paint4_linear_3329_15074)"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M148.677 110.704C146.102 112.161 145.18 115.442 146.82 117.904C152.341 126.188 159.499 133.28 167.872 138.733C177.744 145.163 189.018 149.124 200.742 150.285C212.466 151.446 224.297 149.771 235.238 145.402C243.714 142.018 251.463 137.093 258.105 130.901L264.789 136.733L269.747 111.47L245.39 119.808L249.981 123.814C244.493 128.753 238.161 132.699 231.265 135.453C221.919 139.185 211.812 140.615 201.797 139.624C191.782 138.632 182.152 135.248 173.718 129.756C166.785 125.24 160.827 119.409 156.172 112.61C154.501 110.169 151.251 109.247 148.677 110.704Z" fill="url(#paint5_linear_3329_15074)"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M732.677 110.704C730.102 112.161 729.18 115.442 730.82 117.904C736.341 126.188 743.499 133.28 751.872 138.733C761.744 145.163 773.018 149.124 784.742 150.285C796.466 151.446 808.297 149.771 819.238 145.402C827.714 142.018 835.463 137.093 842.105 130.901L848.789 136.732L853.747 111.47L829.39 119.808L833.982 123.814C828.493 128.753 822.161 132.699 815.265 135.453C805.919 139.185 795.812 140.615 785.797 139.624C775.782 138.632 766.152 135.248 757.718 129.756C750.785 125.24 744.827 119.409 740.172 112.61C738.501 110.169 735.251 109.247 732.677 110.704Z" fill="url(#paint6_linear_3329_15074)"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M445.193 43.0901C445.215 43.0495 445.236 43.0089 445.257 42.968C445.284 42.9224 445.311 42.8764 445.337 42.83C450.489 33.6471 457.888 25.883 466.877 20.288C477.401 13.7372 489.632 10.4542 502.022 10.8544C514.412 11.2545 526.405 15.3197 536.485 22.536C543.824 27.7905 549.909 34.5437 554.363 42.3055C554.461 42.5912 554.583 42.8726 554.732 43.1468C556.894 47.1282 559.046 52.5577 561.401 59.0697C562.335 61.6514 563.318 64.4553 564.34 67.37L564.34 67.371C565.806 71.5491 567.351 75.9547 568.944 80.2595C574.398 94.9999 581.259 111.007 591.243 122.165C591.487 122.438 591.752 122.68 592.033 122.891C594.856 125.929 597.944 128.735 601.268 131.274C612.43 139.796 625.799 144.942 639.794 146.104C653.789 147.265 667.823 144.393 680.237 137.827C691.068 132.098 700.27 123.767 707.034 113.617C708.675 111.155 707.753 107.874 705.178 106.417C702.603 104.96 699.353 105.882 697.682 108.323C691.947 116.7 684.249 123.585 675.228 128.357C664.624 133.966 652.635 136.419 640.68 135.427C628.725 134.435 617.304 130.039 607.77 122.759C604.889 120.559 602.217 118.125 599.778 115.487C599.645 115.292 599.498 115.104 599.336 114.924C590.858 105.448 584.576 91.2106 579.129 76.4904C577.534 72.1796 576.081 68.0329 574.664 63.9902L574.663 63.9865C573.641 61.0699 572.638 58.2073 571.614 55.3762C570.117 51.238 568.61 47.2655 567.047 43.6968C566.972 43.3246 566.852 42.9539 566.684 42.5907C561.357 31.0977 553.134 21.1465 542.784 13.7369C530.964 5.27468 516.901 0.50754 502.371 0.0383122C487.842 -0.430916 473.5 3.41884 461.158 11.1008C450.693 17.615 442.065 26.6367 436.029 37.3048C435.891 37.4951 435.763 37.6965 435.648 37.9088C433.057 42.6825 430.663 48.838 428.297 55.4172C427.261 58.2957 426.248 61.205 425.215 64.1705L425.214 64.1751L425.213 64.1774L425.211 64.182L425.211 64.1822C423.799 68.2375 422.35 72.3981 420.757 76.7289C415.289 91.5998 408.99 105.968 400.518 115.436C400.357 115.616 400.21 115.804 400.077 115.999C397.637 118.637 394.965 121.072 392.085 123.271C382.55 130.551 371.13 134.947 359.175 135.939C347.22 136.932 335.231 134.478 324.626 128.869C315.605 124.098 307.907 117.213 302.172 108.835C300.501 106.394 297.251 105.472 294.677 106.93C292.102 108.387 291.18 111.668 292.82 114.13C299.585 124.279 308.786 132.611 319.618 138.34C332.031 144.905 346.066 147.778 360.061 146.616C374.056 145.455 387.425 140.308 398.586 131.786C401.911 129.248 404.998 126.442 407.821 123.404C408.103 123.192 408.368 122.95 408.612 122.678C418.602 111.512 425.481 95.3512 430.95 80.4768C432.538 76.1587 434.081 71.7324 435.544 67.5344L435.545 67.5335L435.545 67.533C436.579 64.5661 437.574 61.7132 438.516 59.0931C440.878 52.5262 443.034 47.0663 445.193 43.0901Z" fill="url(#paint7_linear_3329_15074)"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M737.193 43.09C737.214 43.0498 737.236 43.0094 737.257 42.9688C737.284 42.923 737.311 42.8768 737.337 42.8301C741.772 34.9248 747.881 28.0559 755.26 22.7176C764.104 16.3195 774.466 12.3419 785.319 11.1786C796.173 10.0154 807.142 11.7068 817.141 16.0854C824.401 19.2649 830.968 23.7812 836.511 29.3724L831.39 33.84L855.746 42.1779L850.789 16.9156L844.679 22.2458C838.079 15.4618 830.208 9.99379 821.482 6.17248C809.756 1.03789 796.893 -0.945526 784.166 0.418577C771.438 1.78268 759.288 6.447 748.917 13.9498C740.336 20.1579 733.219 28.1311 728.029 37.3044C727.891 37.4948 727.763 37.6964 727.648 37.9087C725.057 42.6825 722.663 48.838 720.297 55.4172C719.261 58.2956 718.248 61.2047 717.215 64.1701L717.214 64.1751L717.213 64.1773L717.211 64.1824C715.799 68.2376 714.349 72.3981 712.757 76.7289C707.289 91.5997 700.99 105.968 692.518 115.436C692.357 115.617 692.21 115.805 692.077 115.999C689.637 118.637 686.965 121.072 684.085 123.271C674.55 130.551 663.13 134.947 651.175 135.939C639.22 136.932 627.231 134.478 616.626 128.869C607.605 124.098 599.907 117.213 594.172 108.835C592.501 106.394 589.251 105.472 586.677 106.929C584.102 108.387 583.18 111.668 584.82 114.13C591.585 124.279 600.786 132.611 611.618 138.34C624.031 144.905 638.066 147.777 652.061 146.616C666.056 145.455 679.425 140.308 690.586 131.786C693.911 129.248 696.998 126.442 699.821 123.404C700.103 123.192 700.368 122.95 700.612 122.678C710.602 111.512 717.481 95.3511 722.95 80.4768C724.536 76.1627 726.078 71.7406 727.54 67.5462L727.542 67.5399L727.544 67.5342L727.545 67.5335C728.579 64.5663 729.573 61.7133 730.516 59.0931C732.878 52.5262 735.034 47.0663 737.193 43.09Z" fill="url(#paint8_linear_3329_15074)"/>
      <defs>
        <filter id="filter0_d_3329_15074" x="7.00391" y="24.0059" width="109.116" height="109.117" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3329_15074"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3329_15074" result="shape"/>
        </filter>
        <filter id="filter1_d_3329_15074" x="299.004" y="24.0059" width="109.116" height="109.117" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3329_15074"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3329_15074" result="shape"/>
        </filter>
        <filter id="filter2_d_3329_15074" x="591.004" y="24.0059" width="109.116" height="109.117" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3329_15074"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3329_15074" result="shape"/>
        </filter>
        <filter id="filter3_d_3329_15074" x="153.004" y="23.0078" width="109.116" height="109.117" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3329_15074"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3329_15074" result="shape"/>
        </filter>
        <filter id="filter4_d_3329_15074" x="445.004" y="23.0078" width="109.116" height="109.117" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3329_15074"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3329_15074" result="shape"/>
        </filter>
        <filter id="filter5_d_3329_15074" x="737.004" y="23.0078" width="109.116" height="109.117" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3329_15074"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3329_15074" result="shape"/>
        </filter>
        <linearGradient id="paint0_linear_3329_15074" x1="285.5" y1="0" x2="2.83586" y2="100.645" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FF9934"/>
          <stop offset="0.220452" stop-color="#F26818"/>
          <stop offset="0.56498" stop-color="#FF9934"/>
          <stop offset="0.942956" stop-color="#F26818"/>
        </linearGradient>
        <linearGradient id="paint1_linear_3329_15074" x1="401" y1="44.0002" x2="286" y2="44.0002" gradientUnits="userSpaceOnUse">
          <stop stop-color="#F46E1D"/>
          <stop offset="0.575197" stop-color="#FF9934"/>
          <stop offset="0.865824" stop-color="#FF9934"/>
        </linearGradient>
        <linearGradient id="paint2_linear_3329_15074" x1="128" y1="44.0002" x2="-27" y2="44.0002" gradientUnits="userSpaceOnUse">
          <stop offset="0.176509" stop-color="#F26818"/>
          <stop offset="0.462825" stop-color="#FF9934"/>
          <stop offset="1" stop-color="#FF9934"/>
        </linearGradient>
        <linearGradient id="paint3_linear_3329_15074" x1="708" y1="44.0005" x2="564.5" y2="48.5005" gradientUnits="userSpaceOnUse">
          <stop offset="0.123715" stop-color="#F26818"/>
          <stop offset="0.597062" stop-color="#FF9934"/>
          <stop offset="0.919352" stop-color="#FF9934"/>
        </linearGradient>
        <linearGradient id="paint4_linear_3329_15074" x1="425" y1="151" x2="567.5" y2="151" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FE933C"/>
          <stop offset="0.555386" stop-color="#FF9934"/>
          <stop offset="0.958184" stop-color="#F26818"/>
        </linearGradient>
        <linearGradient id="paint5_linear_3329_15074" x1="146" y1="151" x2="262" y2="151" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FE933C"/>
          <stop offset="0.514298" stop-color="#FE933C"/>
          <stop offset="1" stop-color="#F26818"/>
        </linearGradient>
        <linearGradient id="paint6_linear_3329_15074" x1="706.5" y1="151" x2="889" y2="151" gradientUnits="userSpaceOnUse">
          <stop offset="0.0695406" stop-color="#FF9934"/>
          <stop offset="0.51453" stop-color="#FF9934"/>
          <stop offset="0.69546" stop-color="#F26818"/>
        </linearGradient>
        <linearGradient id="paint7_linear_3329_15074" x1="470.689" y1="-0.000381323" x2="518.864" y2="-9.79962" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FF9934"/>
          <stop offset="0.45849" stop-color="#F26818"/>
          <stop offset="0.973031" stop-color="#FF9934"/>
        </linearGradient>
        <linearGradient id="paint8_linear_3329_15074" x1="959.499" y1="3.09692" x2="723.808" y2="131.826" gradientUnits="userSpaceOnUse">
          <stop offset="0.423653" stop-color="#F26818"/>
          <stop offset="0.521793" stop-color="#FF9934"/>
          <stop offset="0.931515" stop-color="#F26818"/>
          <stop offset="1" stop-color="#FE933C"/>
        </linearGradient>
      </defs>
    </svg>
  )
}