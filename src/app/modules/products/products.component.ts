import { Component, ViewEncapsulation } from '@angular/core';
import { Product } from 'app/core/product/product.types';
import { ShoppingCartService } from 'app/core/shopping-cart/shopping-cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styles: [
        `
            app-products fuse-card {
                margin: 10px;
            }

            app-products mat-paginator {
                margin: 10px;
                position: relative;
                display: flex;
                overflow: hidden;
                --tw-bg-opacity: 1;
                background-color: rgba(var(--fuse-bg-card-rgb), var(--tw-bg-opacity));
                border-radius: 1rem;
                --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
                --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
                box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            }
        `
    ],
    encapsulation: ViewEncapsulation.None,
})
export class ProductsComponent {
    products: Product[] = [
        {
            code: 'item-1',
            name: 'PC PORTABLE HP VICTUS 15-FB0022NK',
            // eslint-disable-next-line max-len
            description: 'Écran 15.6 " Full HD IPS- Processeur AMD Ryzen 5 5600H, up to 4.2 Ghz, 16 Mo de mémoire cache - Mémoire 16 Go - Disque 512 Go SSD M.2 - Carte graphique Nvidia GeForce GTX 1650, 4 Go de mémoire dédiée',
            price: 2309,
            photoUrl: 'https://www.tunisianet.com.tn/277994-large/pc-portable-hp-victus-15-fb0022nk-ryzen-5-5600h-16-go-gtx-1650-4g.jpg'
        },
        {
            code: 'item-2',
            name: 'SMARTPHONE APPLE IPHONE 14 PRO MAX',
            // eslint-disable-next-line max-len
            description: 'Ecran 6.7" HDR OLED Super Retina XDR (1290 x 2796 px) - Processeur Apple A16 Bionic Hexa Core - Etanche IP68 - RAM 6 Go - Mémoire 128 Go - Système d’exploitation iOS 16 - Appareils Photos 48Mp - 5G',
            price: 6773,
            photoUrl: 'https://www.tunisianet.com.tn/286978-large/smartphone-apple-iphone-14-pro-max-6go-128-go-noir.jpg'
        },
        {
            code: 'item-3',
            name: 'MANETTE DE JEUX BLUETOOTH SANS FIL WHITE SHARK ARMAGEDDON',
            // eslint-disable-next-line max-len
            description: 'Compatible avec PS3 et PS4 - Interface: Bluetooth, Micro USB - 15x Boutons + 2x Analogues + TouchPad - Batterie Li-Ion 600 mAh - Autonomie 6-8h - Distance de fonctionnement sans fil 8-10m',
            price: 129,
            photoUrl: 'https://www.tunisianet.com.tn/185034-large/manette-de-jeux-bluetooth-sans-fil-white-shark-armageddon-ps3-et-ps4.jpg'
        },
        {
            code: 'item-4',
            name: 'PC PORTABLE LENOVO IDEAPAD 3 15ITL6',
            // eslint-disable-next-line max-len
            description: 'Ecran 15.6" LED Full HD - Processeur Intel Core i5-1135G7, 11ème Gén, up to 4.2 Ghz, 8 Mo de mémoire cache - Mémoire 12 Go - Disque 512 Go .2 2280 PCIe 3.0x4 NVMe - Carte graphique NVIDIA GeForce MX350, 2 Go de mémoire GDDR5 dédiée',
            price: 1969,
            photoUrl: 'https://www.tunisianet.com.tn/283938-large/pc-portable-lenovo-ideapad-3-15itl6-i5-11e-gen-12-go-512-go-ssd-bleu.jpg'
        },
        {
            code: 'item-5',
            name: 'CARTE GRAPHIQUE MSI GEFORCE RTX 4080 GAMING X TRIO',
            // eslint-disable-next-line max-len
            description: 'Carte Graphique MSI GeForce RTX 4080 GAMING X TRIO - PCI Express Gen 4 - Mémoire: 16 Go GDDR6X - Mémoire bus: 256 bit - Fréquence Boost  2610 MHz - Fréquence Mémoire: 22400 MHz',
            price: 5099,
            photoUrl: 'https://www.tunisianet.com.tn/285271-large/carte-graphique-msi-geforce-rtx-4080-gaming-x-trio-16g-gddr6x.jpg'
        },
        {
            code: 'item-6',
            name: 'ECRAN ASUS VP228HE 21.5" LED FULL HD / 60 HZ',
            // eslint-disable-next-line max-len
            description: 'Ecran Asus 21.5" LED Full HD - Résolution 1920 x 1080p - Dalle anti-reflets - Taux de rafraîchissement maxi 75Hz - Luminosité 200 cd/m² - Temps de réponse: 1ms - Contraste 1000 /1 - Haut-parleurs intégrés 2x 1.5W  - Angle de vision 170°H/160°V',
            price: 399,
            photoUrl: 'https://www.tunisianet.com.tn/248467-large/ecran-asus-vp228he-215-led-full-hd-60-hz.jpg'
        }
    ];

    constructor(private toastrService: ToastrService, private shoppingCartService: ShoppingCartService) {

    }

    addToCart(product: Product): void {
        this.shoppingCartService.addItem(product);
        this.toastrService.info('Product Added To Cart!',);
    }
}
