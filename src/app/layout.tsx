import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const rubik = Rubik({
    subsets: ['latin'],
    variable: '--font-rubik',
})

export const metadata: Metadata = {
    title: 'Dokidoki',
    description:
        'Дайте волю своїм емоціям з Dokidoki: захоплива колекція аніме, що вразить ваше серце та додасть драйву до вашого дня! Погрузіться у світ пригод, емоцій та незабутніх моментів разом з Dokidoki!',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang='en' className={cn(rubik.variable)}>
            <body className='min-h-screen bg-background'>
                {children}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                nihil velit cumque dolorum, tempore accusantium libero debitis,
                vel quibusdam minima neque natus nisi perspiciatis veniam beatae
                alias sunt numquam temporibus incidunt ea est iure laboriosam
                earum! Iure porro quasi id obcaecati laborum minima eius
                corrupti repellendus ipsum tempora temporibus exercitationem
                consequatur alias nihil, unde quas iusto vitae error commodi
                consectetur deleniti deserunt vel explicabo molestiae! Dolores
                labore ad distinctio similique nostrum atque a ipsum dolor,
                iste, ipsa quia commodi. Cupiditate voluptates dicta ipsam,
                explicabo accusamus est accusantium quo libero recusandae iste
                quibusdam ea perspiciatis voluptate nostrum ex hic! Ea in ipsa
                illum obcaecati doloremque deserunt, cumque ratione impedit qui
                rem et sit quibusdam numquam nisi eveniet quas. Dignissimos
                aperiam, pariatur eveniet voluptate officia non provident ullam
                velit assumenda natus suscipit omnis dolorum iure quo sunt
                libero ratione accusamus repellat obcaecati magnam nihil
                doloremque. Nemo alias consectetur et delectus adipisci
                explicabo dolorum quia doloremque quo, enim vel consequatur
                tempora harum ducimus eligendi. Earum quasi, delectus sed et
                iusto unde minus ex cumque sequi necessitatibus iure error, vero
                quia, provident corporis vitae voluptatibus enim quibusdam
                veritatis magnam nihil asperiores consectetur. Sapiente
                assumenda explicabo, veniam dolorum nam ipsum ipsa possimus vel,
                vero aut dicta labore minima doloribus sed harum eius eaque quam
                reiciendis culpa in sunt, nostrum alias praesentium! Doloremque,
                explicabo. Quos ad ab impedit voluptate nisi labore dignissimos,
                praesentium inventore enim nulla consequuntur a velit debitis
                molestiae magnam nihil nam quia maiores. Nemo qui labore quo
                aperiam quos expedita temporibus maiores pariatur officiis
                fugit, corrupti voluptates debitis illo, ea perferendis, a
                repellendus obcaecati consectetur impedit repellat dicta error
                quis? Aperiam explicabo cumque libero, aliquid sequi molestiae
                eaque laudantium aut ipsa consequuntur nobis harum nemo atque
                earum ratione ipsum, tempore corporis illum magni veniam eveniet
                nam necessitatibus? Molestias voluptate voluptatem, ea quidem
                ullam qui amet tempore, vitae perferendis fugiat pariatur
                laudantium delectus numquam accusantium dicta aut atque, in
                dolore nisi earum cumque esse labore incidunt. Consequatur
                eligendi modi voluptate. Facilis, incidunt alias? Laudantium,
                nostrum non. Non voluptate molestiae sequi, animi quod
                repudiandae ea quaerat ducimus recusandae itaque fugiat porro
                nihil in temporibus, saepe quasi vero consectetur voluptas
                eligendi enim error aliquam? Nisi, soluta! Totam natus ab
                perferendis! Doloribus incidunt totam aut corporis ea numquam
                magnam iure est. Deleniti fuga autem magnam voluptatibus placeat
                quae consectetur qui accusantium reiciendis voluptatum, velit
                dolor ullam perferendis quia, ducimus officia, ipsum modi
                aperiam minima! Quisquam officiis blanditiis quidem provident
                porro voluptatum, ut quo dignissimos quaerat, tempore, eos
                assumenda molestias amet consequuntur fuga. Fugiat quam tempore
                eius sit similique quod aspernatur ea quos! Delectus, minus!
                Quas velit quidem repellat soluta aut, porro, voluptates aperiam
                blanditiis quasi saepe suscipit, non dolor voluptate! Soluta
                maiores consectetur iste assumenda, quaerat molestiae nam fuga
                tempora eum illo repudiandae molestias laudantium asperiores
                voluptate laboriosam? Sapiente illum eligendi aliquid
                perferendis quod magnam iure quidem facere cumque recusandae
                quis fugiat quos dignissimos accusamus fugit nisi, officia ipsam
                dolorem soluta ab est! Est consectetur placeat provident
                officia, voluptates in fuga sit, velit blanditiis ipsa rerum ut,
                nesciunt fugiat praesentium sint suscipit ex dolorem nemo soluta
                doloremque. Quia, minima recusandae. Nesciunt expedita sint ex
                tempore amet aliquam cumque voluptas fugiat nulla? Eos ut iure
                voluptatum ea molestias modi, maxime autem officia repellat
                dolores illum deserunt nam similique error, iste dicta
                reiciendis laudantium consequatur iusto vel necessitatibus.
                Consectetur blanditiis fugit tenetur debitis, quidem corporis
                atque in soluta numquam officia cupiditate at delectus adipisci
                illum quo libero modi quisquam quod suscipit! Dolorum,
                voluptatum, cupiditate iusto impedit autem nam iste in excepturi
                pariatur alias a neque cum harum. Tempore porro minus explicabo
                eaque architecto quaerat accusamus incidunt debitis velit
                veritatis nemo delectus, vel laboriosam dignissimos blanditiis
                consequatur dolorum maxime ullam ipsa repellat inventore!
                Dolores saepe neque repellendus ad excepturi officiis expedita
                obcaecati beatae enim hic corrupti magnam, explicabo reiciendis
                unde consequuntur exercitationem earum ea quidem recusandae
                voluptatem dolorum iste itaque! Quisquam voluptas, expedita in
                est neque eum porro recusandae quis officiis, ut accusamus sit
                vel voluptates perspiciatis reprehenderit nobis et voluptatem
                culpa dicta molestias praesentium. Voluptatum enim ipsam
                cupiditate voluptas placeat necessitatibus fuga itaque quidem at
                esse excepturi, optio possimus iste eaque recusandae nam
                eligendi totam. Sed accusamus consequatur, exercitationem
                assumenda porro voluptas quasi recusandae illum nobis laborum et
                saepe, molestias praesentium doloribus ex provident ratione
                delectus id blanditiis tenetur veritatis culpa. Nemo facilis rem
                reprehenderit soluta reiciendis velit dolor aut omnis accusamus
                libero eaque laboriosam beatae tempore totam possimus, aliquam
                suscipit atque. Cumque, perferendis numquam quasi dolorum a
                itaque reprehenderit quo cum, rerum laudantium porro corrupti
                non repellendus voluptas similique et? Velit nulla nesciunt
                dolorum ratione! Delectus, consectetur magnam similique quo
                laudantium culpa iure atque ut, porro incidunt accusamus sint,
                neque praesentium error eos. Quasi quaerat voluptatum, nemo
                doloribus amet, quos assumenda nobis sapiente voluptate soluta
                beatae neque praesentium ut quam ad reiciendis expedita
                obcaecati ex. Eligendi sequi quis dignissimos rem nobis, ut
                reiciendis minus dolorem, non ex quas! Nemo eligendi placeat
                beatae facere voluptatem officiis velit quod nisi, incidunt
                maiores doloribus temporibus sed tempora accusantium sit
                consequatur molestias quae laboriosam consequuntur! Voluptatum
                provident corporis amet nemo incidunt magni nisi ad quaerat,
                quidem accusamus sunt assumenda velit ullam aliquid a ducimus
                natus odio earum non vero rem, aut ipsam consectetur? Nihil,
                quod. Neque placeat numquam temporibus dolore assumenda eveniet
                animi est debitis consectetur beatae? Temporibus veritatis
                molestiae incidunt ratione? Laudantium quam iste quaerat quia
                explicabo molestiae illo ab assumenda. Odio, nesciunt? Culpa
                voluptates minima nostrum incidunt, asperiores facilis sunt nemo
                doloribus esse eaque quo eum voluptatibus quisquam non pariatur
                corrupti molestias quos expedita illo eveniet, voluptate eos
                odio fuga. Nulla molestiae ab incidunt excepturi reprehenderit
                nesciunt cumque ullam! Perferendis culpa sapiente unde
                blanditiis molestias corrupti cum doloribus assumenda nesciunt.
                Tempore corporis eum error libero nam! Perspiciatis aut quod,
                tempora eius dolore ducimus rem dolorum quam eos ex? Sapiente,
                maiores exercitationem assumenda officia voluptatem possimus
                praesentium illo fuga neque, tempora ratione molestias velit?
                Voluptas rem nisi provident soluta exercitationem ut eos odio
                voluptates consectetur porro? Unde ab totam magnam consectetur
                voluptates dolor eius deleniti, veritatis voluptas doloremque?
                Voluptates, quod similique.
            </body>
        </html>
    )
}

export default RootLayout
