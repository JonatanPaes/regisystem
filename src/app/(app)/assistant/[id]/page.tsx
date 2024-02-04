import Image from 'next/image'

import { Badge } from '@/app/components/ui/badge'
import { Card, CardContent } from '@/app/components/ui/card'

export default async function AssistantOrderProduct() {
  const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength) + '...'
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <Card className="h-[400px] max-w-full rounded-2xl md:w-96">
        <CardContent className="px-1 py-0 pt-1">
          <div className="relative h-[160px] w-full">
            <div className="absolute left-2 top-2 z-50">
              <Badge
                variant="default"
                className="left-3 top-3 flex items-center gap-1 opacity-90"
              >
                <span className="text-xs">Quantidade: 5</span>
              </Badge>
            </div>
            <Image
              alt="product"
              src="https://images.kabum.com.br/produtos/fotos/magalu/459233/PlayStation-5-825GB-1-Controle-Branco-Sony_1682705787_g.jpg"
              style={{
                objectFit: 'cover',
              }}
              fill
              className="rounded-2xl"
            />
          </div>

          <div className="overflow-hidden px-2 pb-3 ">
            <h2 className="mt-2 overflow-hidden text-ellipsis text-nowrap font-bold">
              PlayStation 5
            </h2>
            <p className="overflow-hidden text-ellipsis text-nowrap text-sm text-gray-400">
              R$ 5.000
            </p>
            <p className="overflow-hidden text-ellipsis text-wrap text-sm text-gray-400 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              {truncateText(
                `O PlayStation 5 é uma obra-prima da engenharia e design de última
              geração, elevando a experiência de jogo a novos patamares de
              imersão e realismo. Com um visual elegante e futurista, o console
              apresenta linhas aerodinâmicas e detalhes sofisticados que o
              tornam uma peça de destaque em qualquer ambiente de
              entretenimento.`,
                450,
              )}
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="h-[400px] max-w-full rounded-2xl md:w-96">
        <CardContent className="px-1 py-0 pt-1">
          <div className="relative h-[160px] w-full">
            <div className="absolute left-2 top-2 z-50">
              <Badge
                variant="default"
                className="left-3 top-3 flex items-center gap-1 opacity-90"
              >
                <span className="text-xs">Quantidade: 5</span>
              </Badge>
            </div>
            <Image
              alt="product"
              src="https://images.kabum.com.br/produtos/fotos/magalu/459233/PlayStation-5-825GB-1-Controle-Branco-Sony_1682705787_g.jpg"
              style={{
                objectFit: 'cover',
              }}
              fill
              className="rounded-2xl"
            />
          </div>

          <div className="overflow-hidden px-2 pb-3 ">
            <h2 className="mt-2 overflow-hidden text-ellipsis text-nowrap font-bold">
              PlayStation 5
            </h2>
            <p className="overflow-hidden text-ellipsis text-nowrap text-sm text-gray-400">
              R$ 5.000
            </p>
            <p className="overflow-hidden text-ellipsis text-wrap text-sm text-gray-400 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              {truncateText(
                `O PlayStation 5 é uma obra-prima da engenharia e design de última
              geração, elevando a experiência de jogo a novos patamares de
              imersão e realismo. Com um visual elegante e futurista, o console
              apresenta linhas aerodinâmicas e detalhes sofisticados que o
              tornam uma peça de destaque em qualquer ambiente de
              entretenimento.`,
                450,
              )}
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="h-[400px] max-w-full rounded-2xl md:w-96">
        <CardContent className="px-1 py-0 pt-1">
          <div className="relative h-[160px] w-full">
            <div className="absolute left-2 top-2 z-50">
              <Badge
                variant="default"
                className="left-3 top-3 flex items-center gap-1 opacity-90"
              >
                <span className="text-xs">Quantidade: 5</span>
              </Badge>
            </div>
            <Image
              alt="product"
              src="https://images.kabum.com.br/produtos/fotos/magalu/459233/PlayStation-5-825GB-1-Controle-Branco-Sony_1682705787_g.jpg"
              style={{
                objectFit: 'cover',
              }}
              fill
              className="rounded-2xl"
            />
          </div>

          <div className="overflow-hidden px-2 pb-3 ">
            <h2 className="mt-2 overflow-hidden text-ellipsis text-nowrap font-bold">
              PlayStation 5
            </h2>
            <p className="overflow-hidden text-ellipsis text-nowrap text-sm text-gray-400">
              R$ 5.000
            </p>
            <p className="overflow-hidden text-ellipsis text-wrap text-sm text-gray-400 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              {truncateText(
                `O PlayStation 5 é uma obra-prima da engenharia e design de última
              geração, elevando a experiência de jogo a novos patamares de
              imersão e realismo. Com um visual elegante e futurista, o console
              apresenta linhas aerodinâmicas e detalhes sofisticados que o
              tornam uma peça de destaque em qualquer ambiente de
              entretenimento.`,
                450,
              )}
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="h-[400px] max-w-full rounded-2xl md:w-96">
        <CardContent className="px-1 py-0 pt-1">
          <div className="relative h-[160px] w-full">
            <div className="absolute left-2 top-2 z-50">
              <Badge
                variant="default"
                className="left-3 top-3 flex items-center gap-1 opacity-90"
              >
                <span className="text-xs">Quantidade: 5</span>
              </Badge>
            </div>
            <Image
              alt="product"
              src="https://images.kabum.com.br/produtos/fotos/magalu/459233/PlayStation-5-825GB-1-Controle-Branco-Sony_1682705787_g.jpg"
              style={{
                objectFit: 'cover',
              }}
              fill
              className="rounded-2xl"
            />
          </div>

          <div className="overflow-hidden px-2 pb-3 ">
            <h2 className="mt-2 overflow-hidden text-ellipsis text-nowrap font-bold">
              PlayStation 5
            </h2>
            <p className="overflow-hidden text-ellipsis text-nowrap text-sm text-gray-400">
              R$ 5.000
            </p>
            <p className="overflow-hidden text-ellipsis text-wrap text-sm text-gray-400 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              {truncateText(
                `O PlayStation 5 é uma obra-prima da engenharia e design de última
              geração, elevando a experiência de jogo a novos patamares de
              imersão e realismo. Com um visual elegante e futurista, o console
              apresenta linhas aerodinâmicas e detalhes sofisticados que o
              tornam uma peça de destaque em qualquer ambiente de
              entretenimento.`,
                450,
              )}
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="h-[400px] max-w-full rounded-2xl md:w-96">
        <CardContent className="px-1 py-0 pt-1">
          <div className="relative h-[160px] w-full">
            <div className="absolute left-2 top-2 z-50">
              <Badge
                variant="default"
                className="left-3 top-3 flex items-center gap-1 opacity-90"
              >
                <span className="text-xs">Quantidade: 5</span>
              </Badge>
            </div>
            <Image
              alt="product"
              src="https://images.kabum.com.br/produtos/fotos/magalu/459233/PlayStation-5-825GB-1-Controle-Branco-Sony_1682705787_g.jpg"
              style={{
                objectFit: 'cover',
              }}
              fill
              className="rounded-2xl"
            />
          </div>

          <div className="overflow-hidden px-2 pb-3 ">
            <h2 className="mt-2 overflow-hidden text-ellipsis text-nowrap font-bold">
              PlayStation 5
            </h2>
            <p className="overflow-hidden text-ellipsis text-nowrap text-sm text-gray-400">
              R$ 5.000
            </p>
            <p className="overflow-hidden text-ellipsis text-wrap text-sm text-gray-400 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              {truncateText(
                `O PlayStation 5 é uma obra-prima da engenharia e design de última
              geração, elevando a experiência de jogo a novos patamares de
              imersão e realismo. Com um visual elegante e futurista, o console
              apresenta linhas aerodinâmicas e detalhes sofisticados que o
              tornam uma peça de destaque em qualquer ambiente de
              entretenimento.`,
                450,
              )}
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="h-[400px] max-w-full rounded-2xl md:w-96">
        <CardContent className="px-1 py-0 pt-1">
          <div className="relative h-[160px] w-full">
            <div className="absolute left-2 top-2 z-50">
              <Badge
                variant="default"
                className="left-3 top-3 flex items-center gap-1 opacity-90"
              >
                <span className="text-xs">Quantidade: 5</span>
              </Badge>
            </div>
            <Image
              alt="product"
              src="https://images.kabum.com.br/produtos/fotos/magalu/459233/PlayStation-5-825GB-1-Controle-Branco-Sony_1682705787_g.jpg"
              style={{
                objectFit: 'cover',
              }}
              fill
              className="rounded-2xl"
            />
          </div>

          <div className="overflow-hidden px-2 pb-3 ">
            <h2 className="mt-2 overflow-hidden text-ellipsis text-nowrap font-bold">
              PlayStation 5
            </h2>
            <p className="overflow-hidden text-ellipsis text-nowrap text-sm text-gray-400">
              R$ 5.000
            </p>
            <p className="overflow-hidden text-ellipsis text-wrap text-sm text-gray-400 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              {truncateText(
                `O PlayStation 5 é uma obra-prima da engenharia e design de última
              geração, elevando a experiência de jogo a novos patamares de
              imersão e realismo. Com um visual elegante e futurista, o console
              apresenta linhas aerodinâmicas e detalhes sofisticados que o
              tornam uma peça de destaque em qualquer ambiente de
              entretenimento.`,
                450,
              )}
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="h-[400px] max-w-full rounded-2xl md:w-96">
        <CardContent className="px-1 py-0 pt-1">
          <div className="relative h-[160px] w-full">
            <div className="absolute left-2 top-2 z-50">
              <Badge
                variant="default"
                className="left-3 top-3 flex items-center gap-1 opacity-90"
              >
                <span className="text-xs">Quantidade: 5</span>
              </Badge>
            </div>
            <Image
              alt="product"
              src="https://images.kabum.com.br/produtos/fotos/magalu/459233/PlayStation-5-825GB-1-Controle-Branco-Sony_1682705787_g.jpg"
              style={{
                objectFit: 'cover',
              }}
              fill
              className="rounded-2xl"
            />
          </div>

          <div className="overflow-hidden px-2 pb-3 ">
            <h2 className="mt-2 overflow-hidden text-ellipsis text-nowrap font-bold">
              PlayStation 5
            </h2>
            <p className="overflow-hidden text-ellipsis text-nowrap text-sm text-gray-400">
              R$ 5.000
            </p>
            <p className="overflow-hidden text-ellipsis text-wrap text-sm text-gray-400 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              {truncateText(
                `O PlayStation 5 é uma obra-prima da engenharia e design de última
              geração, elevando a experiência de jogo a novos patamares de
              imersão e realismo. Com um visual elegante e futurista, o console
              apresenta linhas aerodinâmicas e detalhes sofisticados que o
              tornam uma peça de destaque em qualquer ambiente de
              entretenimento.`,
                450,
              )}
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="h-[400px] max-w-full rounded-2xl md:w-96">
        <CardContent className="px-1 py-0 pt-1">
          <div className="relative h-[160px] w-full">
            <div className="absolute left-2 top-2 z-50">
              <Badge
                variant="default"
                className="left-3 top-3 flex items-center gap-1 opacity-90"
              >
                <span className="text-xs">Quantidade: 5</span>
              </Badge>
            </div>
            <Image
              alt="product"
              src="https://images.kabum.com.br/produtos/fotos/magalu/459233/PlayStation-5-825GB-1-Controle-Branco-Sony_1682705787_g.jpg"
              style={{
                objectFit: 'cover',
              }}
              fill
              className="rounded-2xl"
            />
          </div>

          <div className="overflow-hidden px-2 pb-3 ">
            <h2 className="mt-2 overflow-hidden text-ellipsis text-nowrap font-bold">
              PlayStation 5
            </h2>
            <p className="overflow-hidden text-ellipsis text-nowrap text-sm text-gray-400">
              R$ 5.000
            </p>
            <p className="overflow-hidden text-ellipsis text-wrap text-sm text-gray-400 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              {truncateText(
                `O PlayStation 5 é uma obra-prima da engenharia e design de última
              geração, elevando a experiência de jogo a novos patamares de
              imersão e realismo. Com um visual elegante e futurista, o console
              apresenta linhas aerodinâmicas e detalhes sofisticados que o
              tornam uma peça de destaque em qualquer ambiente de
              entretenimento.`,
                450,
              )}
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="h-[400px] max-w-full rounded-2xl md:w-96">
        <CardContent className="px-1 py-0 pt-1">
          <div className="relative h-[160px] w-full">
            <div className="absolute left-2 top-2 z-50">
              <Badge
                variant="default"
                className="left-3 top-3 flex items-center gap-1 opacity-90"
              >
                <span className="text-xs">Quantidade: 5</span>
              </Badge>
            </div>
            <Image
              alt="product"
              src="https://images.kabum.com.br/produtos/fotos/magalu/459233/PlayStation-5-825GB-1-Controle-Branco-Sony_1682705787_g.jpg"
              style={{
                objectFit: 'cover',
              }}
              fill
              className="rounded-2xl"
            />
          </div>

          <div className="overflow-hidden px-2 pb-3 ">
            <h2 className="mt-2 overflow-hidden text-ellipsis text-nowrap font-bold">
              PlayStation 5
            </h2>
            <p className="overflow-hidden text-ellipsis text-nowrap text-sm text-gray-400">
              R$ 5.000
            </p>
            <p className="overflow-hidden text-ellipsis text-wrap text-sm text-gray-400 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              {truncateText(
                `O PlayStation 5 é uma obra-prima da engenharia e design de última
              geração, elevando a experiência de jogo a novos patamares de
              imersão e realismo. Com um visual elegante e futurista, o console
              apresenta linhas aerodinâmicas e detalhes sofisticados que o
              tornam uma peça de destaque em qualquer ambiente de
              entretenimento.`,
                450,
              )}
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="h-[400px] max-w-full rounded-2xl md:w-96">
        <CardContent className="px-1 py-0 pt-1">
          <div className="relative h-[160px] w-full">
            <div className="absolute left-2 top-2 z-50">
              <Badge
                variant="default"
                className="left-3 top-3 flex items-center gap-1 opacity-90"
              >
                <span className="text-xs">Quantidade: 5</span>
              </Badge>
            </div>
            <Image
              alt="product"
              src="https://images.kabum.com.br/produtos/fotos/magalu/459233/PlayStation-5-825GB-1-Controle-Branco-Sony_1682705787_g.jpg"
              style={{
                objectFit: 'cover',
              }}
              fill
              className="rounded-2xl"
            />
          </div>

          <div className="overflow-hidden px-2 pb-3 ">
            <h2 className="mt-2 overflow-hidden text-ellipsis text-nowrap font-bold">
              PlayStation 5
            </h2>
            <p className="overflow-hidden text-ellipsis text-nowrap text-sm text-gray-400">
              R$ 5.000
            </p>
            <p className="overflow-hidden text-ellipsis text-wrap text-sm text-gray-400 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              {truncateText(
                `O PlayStation 5 é uma obra-prima da engenharia e design de última
              geração, elevando a experiência de jogo a novos patamares de
              imersão e realismo. Com um visual elegante e futurista, o console
              apresenta linhas aerodinâmicas e detalhes sofisticados que o
              tornam uma peça de destaque em qualquer ambiente de
              entretenimento.`,
                450,
              )}
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="h-[400px] max-w-full rounded-2xl md:w-96">
        <CardContent className="px-1 py-0 pt-1">
          <div className="relative h-[160px] w-full">
            <div className="absolute left-2 top-2 z-50">
              <Badge
                variant="default"
                className="left-3 top-3 flex items-center gap-1 opacity-90"
              >
                <span className="text-xs">Quantidade: 5</span>
              </Badge>
            </div>
            <Image
              alt="product"
              src="https://images.kabum.com.br/produtos/fotos/magalu/459233/PlayStation-5-825GB-1-Controle-Branco-Sony_1682705787_g.jpg"
              style={{
                objectFit: 'cover',
              }}
              fill
              className="rounded-2xl"
            />
          </div>

          <div className="overflow-hidden px-2 pb-3 ">
            <h2 className="mt-2 overflow-hidden text-ellipsis text-nowrap font-bold">
              PlayStation 5
            </h2>
            <p className="overflow-hidden text-ellipsis text-nowrap text-sm text-gray-400">
              R$ 5.000
            </p>
            <p className="overflow-hidden text-ellipsis text-wrap text-sm text-gray-400 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              {truncateText(
                `O PlayStation 5 é uma obra-prima da engenharia e design de última
              geração, elevando a experiência de jogo a novos patamares de
              imersão e realismo. Com um visual elegante e futurista, o console
              apresenta linhas aerodinâmicas e detalhes sofisticados que o
              tornam uma peça de destaque em qualquer ambiente de
              entretenimento.`,
                450,
              )}
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="h-[400px] max-w-full rounded-2xl md:w-96">
        <CardContent className="px-1 py-0 pt-1">
          <div className="relative h-[160px] w-full">
            <div className="absolute left-2 top-2 z-50">
              <Badge
                variant="default"
                className="left-3 top-3 flex items-center gap-1 opacity-90"
              >
                <span className="text-xs">Quantidade: 5</span>
              </Badge>
            </div>
            <Image
              alt="product"
              src="https://images.kabum.com.br/produtos/fotos/magalu/459233/PlayStation-5-825GB-1-Controle-Branco-Sony_1682705787_g.jpg"
              style={{
                objectFit: 'cover',
              }}
              fill
              className="rounded-2xl"
            />
          </div>

          <div className="overflow-hidden px-2 pb-3 ">
            <h2 className="mt-2 overflow-hidden text-ellipsis text-nowrap font-bold">
              PlayStation 5
            </h2>
            <p className="overflow-hidden text-ellipsis text-nowrap text-sm text-gray-400">
              R$ 5.000
            </p>
            <p className="overflow-hidden text-ellipsis text-wrap text-sm text-gray-400 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              {truncateText(
                `O PlayStation 5 é uma obra-prima da engenharia e design de última
              geração, elevando a experiência de jogo a novos patamares de
              imersão e realismo. Com um visual elegante e futurista, o console
              apresenta linhas aerodinâmicas e detalhes sofisticados que o
              tornam uma peça de destaque em qualquer ambiente de
              entretenimento.`,
                450,
              )}
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="h-[400px] max-w-full rounded-2xl md:w-96">
        <CardContent className="px-1 py-0 pt-1">
          <div className="relative h-[160px] w-full">
            <div className="absolute left-2 top-2 z-50">
              <Badge
                variant="default"
                className="left-3 top-3 flex items-center gap-1 opacity-90"
              >
                <span className="text-xs">Quantidade: 5</span>
              </Badge>
            </div>
            <Image
              alt="product"
              src="https://images.kabum.com.br/produtos/fotos/magalu/459233/PlayStation-5-825GB-1-Controle-Branco-Sony_1682705787_g.jpg"
              style={{
                objectFit: 'cover',
              }}
              fill
              className="rounded-2xl"
            />
          </div>

          <div className="overflow-hidden px-2 pb-3 ">
            <h2 className="mt-2 overflow-hidden text-ellipsis text-nowrap font-bold">
              PlayStation 5
            </h2>
            <p className="overflow-hidden text-ellipsis text-nowrap text-sm text-gray-400">
              R$ 5.000
            </p>
            <p className="overflow-hidden text-ellipsis text-wrap text-sm text-gray-400 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              {truncateText(
                `O PlayStation 5 é uma obra-prima da engenharia e design de última
              geração, elevando a experiência de jogo a novos patamares de
              imersão e realismo. Com um visual elegante e futurista, o console
              apresenta linhas aerodinâmicas e detalhes sofisticados que o
              tornam uma peça de destaque em qualquer ambiente de
              entretenimento.`,
                450,
              )}
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="h-[400px] max-w-full rounded-2xl md:w-96">
        <CardContent className="px-1 py-0 pt-1">
          <div className="relative h-[160px] w-full">
            <div className="absolute left-2 top-2 z-50">
              <Badge
                variant="default"
                className="left-3 top-3 flex items-center gap-1 opacity-90"
              >
                <span className="text-xs">Quantidade: 5</span>
              </Badge>
            </div>
            <Image
              alt="product"
              src="https://images.kabum.com.br/produtos/fotos/magalu/459233/PlayStation-5-825GB-1-Controle-Branco-Sony_1682705787_g.jpg"
              style={{
                objectFit: 'cover',
              }}
              fill
              className="rounded-2xl"
            />
          </div>

          <div className="overflow-hidden px-2 pb-3 ">
            <h2 className="mt-2 overflow-hidden text-ellipsis text-nowrap font-bold">
              PlayStation 5
            </h2>
            <p className="overflow-hidden text-ellipsis text-nowrap text-sm text-gray-400">
              R$ 5.000
            </p>
            <p className="overflow-hidden text-ellipsis text-wrap text-sm text-gray-400 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              {truncateText(
                `O PlayStation 5 é uma obra-prima da engenharia e design de última
              geração, elevando a experiência de jogo a novos patamares de
              imersão e realismo. Com um visual elegante e futurista, o console
              apresenta linhas aerodinâmicas e detalhes sofisticados que o
              tornam uma peça de destaque em qualquer ambiente de
              entretenimento.`,
                450,
              )}
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="h-[400px] max-w-full rounded-2xl md:w-96">
        <CardContent className="px-1 py-0 pt-1">
          <div className="relative h-[160px] w-full">
            <div className="absolute left-2 top-2 z-50">
              <Badge
                variant="default"
                className="left-3 top-3 flex items-center gap-1 opacity-90"
              >
                <span className="text-xs">Quantidade: 5</span>
              </Badge>
            </div>
            <Image
              alt="product"
              src="https://images.kabum.com.br/produtos/fotos/magalu/459233/PlayStation-5-825GB-1-Controle-Branco-Sony_1682705787_g.jpg"
              style={{
                objectFit: 'cover',
              }}
              fill
              className="rounded-2xl"
            />
          </div>

          <div className="overflow-hidden px-2 pb-3 ">
            <h2 className="mt-2 overflow-hidden text-ellipsis text-nowrap font-bold">
              PlayStation 5
            </h2>
            <p className="overflow-hidden text-ellipsis text-nowrap text-sm text-gray-400">
              R$ 5.000
            </p>
            <p className="overflow-hidden text-ellipsis text-wrap text-sm text-gray-400 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              {truncateText(
                `O PlayStation 5 é uma obra-prima da engenharia e design de última
              geração, elevando a experiência de jogo a novos patamares de
              imersão e realismo. Com um visual elegante e futurista, o console
              apresenta linhas aerodinâmicas e detalhes sofisticados que o
              tornam uma peça de destaque em qualquer ambiente de
              entretenimento.`,
                450,
              )}
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="h-[400px] max-w-full rounded-2xl md:w-96">
        <CardContent className="px-1 py-0 pt-1">
          <div className="relative h-[160px] w-full">
            <div className="absolute left-2 top-2 z-50">
              <Badge
                variant="default"
                className="left-3 top-3 flex items-center gap-1 opacity-90"
              >
                <span className="text-xs">Quantidade: 5</span>
              </Badge>
            </div>
            <Image
              alt="product"
              src="https://images.kabum.com.br/produtos/fotos/magalu/459233/PlayStation-5-825GB-1-Controle-Branco-Sony_1682705787_g.jpg"
              style={{
                objectFit: 'cover',
              }}
              fill
              className="rounded-2xl"
            />
          </div>

          <div className="overflow-hidden px-2 pb-3 ">
            <h2 className="mt-2 overflow-hidden text-ellipsis text-nowrap font-bold">
              PlayStation 5
            </h2>
            <p className="overflow-hidden text-ellipsis text-nowrap text-sm text-gray-400">
              R$ 5.000
            </p>
            <p className="overflow-hidden text-ellipsis text-wrap text-sm text-gray-400 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              {truncateText(
                `O PlayStation 5 é uma obra-prima da engenharia e design de última
              geração, elevando a experiência de jogo a novos patamares de
              imersão e realismo. Com um visual elegante e futurista, o console
              apresenta linhas aerodinâmicas e detalhes sofisticados que o
              tornam uma peça de destaque em qualquer ambiente de
              entretenimento.`,
                450,
              )}
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="h-[400px] max-w-full rounded-2xl md:w-96">
        <CardContent className="px-1 py-0 pt-1">
          <div className="relative h-[160px] w-full">
            <div className="absolute left-2 top-2 z-50">
              <Badge
                variant="default"
                className="left-3 top-3 flex items-center gap-1 opacity-90"
              >
                <span className="text-xs">Quantidade: 5</span>
              </Badge>
            </div>
            <Image
              alt="product"
              src="https://images.kabum.com.br/produtos/fotos/magalu/459233/PlayStation-5-825GB-1-Controle-Branco-Sony_1682705787_g.jpg"
              style={{
                objectFit: 'cover',
              }}
              fill
              className="rounded-2xl"
            />
          </div>

          <div className="overflow-hidden px-2 pb-3 ">
            <h2 className="mt-2 overflow-hidden text-ellipsis text-nowrap font-bold">
              PlayStation 5
            </h2>
            <p className="overflow-hidden text-ellipsis text-nowrap text-sm text-gray-400">
              R$ 5.000
            </p>
            <p className="overflow-hidden text-ellipsis text-wrap text-sm text-gray-400 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              {truncateText(
                `O PlayStation 5 é uma obra-prima da engenharia e design de última
              geração, elevando a experiência de jogo a novos patamares de
              imersão e realismo. Com um visual elegante e futurista, o console
              apresenta linhas aerodinâmicas e detalhes sofisticados que o
              tornam uma peça de destaque em qualquer ambiente de
              entretenimento.`,
                450,
              )}
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="h-[400px] max-w-full rounded-2xl md:w-96">
        <CardContent className="px-1 py-0 pt-1">
          <div className="relative h-[160px] w-full">
            <div className="absolute left-2 top-2 z-50">
              <Badge
                variant="default"
                className="left-3 top-3 flex items-center gap-1 opacity-90"
              >
                <span className="text-xs">Quantidade: 5</span>
              </Badge>
            </div>
            <Image
              alt="product"
              src="https://images.kabum.com.br/produtos/fotos/magalu/459233/PlayStation-5-825GB-1-Controle-Branco-Sony_1682705787_g.jpg"
              style={{
                objectFit: 'cover',
              }}
              fill
              className="rounded-2xl"
            />
          </div>

          <div className="overflow-hidden px-2 pb-3 ">
            <h2 className="mt-2 overflow-hidden text-ellipsis text-nowrap font-bold">
              PlayStation 5
            </h2>
            <p className="overflow-hidden text-ellipsis text-nowrap text-sm text-gray-400">
              R$ 5.000
            </p>
            <p className="overflow-hidden text-ellipsis text-wrap text-sm text-gray-400 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              {truncateText(
                `O PlayStation 5 é uma obra-prima da engenharia e design de última
              geração, elevando a experiência de jogo a novos patamares de
              imersão e realismo. Com um visual elegante e futurista, o console
              apresenta linhas aerodinâmicas e detalhes sofisticados que o
              tornam uma peça de destaque em qualquer ambiente de
              entretenimento.`,
                450,
              )}
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="h-[400px] max-w-full rounded-2xl md:w-96">
        <CardContent className="px-1 py-0 pt-1">
          <div className="relative h-[160px] w-full">
            <div className="absolute left-2 top-2 z-50">
              <Badge
                variant="default"
                className="left-3 top-3 flex items-center gap-1 opacity-90"
              >
                <span className="text-xs">Quantidade: 5</span>
              </Badge>
            </div>
            <Image
              alt="product"
              src="https://images.kabum.com.br/produtos/fotos/magalu/459233/PlayStation-5-825GB-1-Controle-Branco-Sony_1682705787_g.jpg"
              style={{
                objectFit: 'cover',
              }}
              fill
              className="rounded-2xl"
            />
          </div>

          <div className="overflow-hidden px-2 pb-3 ">
            <h2 className="mt-2 overflow-hidden text-ellipsis text-nowrap font-bold">
              PlayStation 5
            </h2>
            <p className="overflow-hidden text-ellipsis text-nowrap text-sm text-gray-400">
              R$ 5.000
            </p>
            <p className="overflow-hidden text-ellipsis text-wrap text-sm text-gray-400 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              {truncateText(
                `O PlayStation 5 é uma obra-prima da engenharia e design de última
              geração, elevando a experiência de jogo a novos patamares de
              imersão e realismo. Com um visual elegante e futurista, o console
              apresenta linhas aerodinâmicas e detalhes sofisticados que o
              tornam uma peça de destaque em qualquer ambiente de
              entretenimento.`,
                450,
              )}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
