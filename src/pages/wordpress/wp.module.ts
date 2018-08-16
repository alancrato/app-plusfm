import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsPage } from './posts/posts';
import { PostPage } from './post/post';
import { Media} from './media/media';
import { Categories } from "./categories/categories";
import { Favorites } from "./favorites/favorites";
import { PipeModule } from "../../app/pipes/pipe.module";
import { PromotionalPage } from "./promotional/promotional";

@NgModule({
    declarations: [
        PostsPage,
        PromotionalPage,
        PostPage,
        Media,
        Categories,
        Favorites
    ],
    imports: [
        CommonModule,
        PipeModule
    ],
    exports: [
        PostsPage,
        PromotionalPage,
        PostPage,
        Media,
        Categories,
        Favorites
    ],
    entryComponents: [
        PostsPage,
        PromotionalPage,
        PostPage,
        Media,
        Categories,
        Favorites
    ]
})

export class WpModule {}

