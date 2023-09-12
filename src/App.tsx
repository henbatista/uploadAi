import { Button } from './components/ui/button'
import {
  GitHubLogoIcon,
  VideoIcon,
  UploadIcon,
  MagicWandIcon
} from '@radix-ui/react-icons'
import { Separator } from './components/ui/separator'
import { Textarea } from './components/ui/textarea'
import { Label } from './components/ui/label'
import { Slider } from './components/ui/slider'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from './components/ui/select'

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">Upload AI</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Desenvolvido com ❤️ por
          </span>
          <Separator orientation="vertical" className="h-6" />
          <Button variant="outline">
            <GitHubLogoIcon className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Inclua o prompt para a IA..."
            />
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Resultado gerado pela IA"
              readOnly
            />
          </div>
          <p className="text-sm text-muted-forground">
            Lembre-se: você pode utilizar a variável{' '}
            <code className="text-sky-600">{'{transcription}'}</code> no seu
            prompt para adicionar o conteúdo da trancrição do video selecionado
          </p>
        </div>

        <aside className="w-80 space-y-6">
          <form className="space-y-6">
            <label
              htmlFor="video"
              className="border flex rounder-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
            >
              <VideoIcon />
              Selecione um video
            </label>
            <input
              type="file"
              name="video"
              id="video"
              accept="video/mp4"
              className="sr-only"
            />

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="transcription_promp">Prompt de transcrição</Label>
              <Textarea
                id="transcription_promp"
                className="h-20 leading-relaxed resize-none"
                placeholder="Inclua palavras chaves mencionadas no video para a IA gerar o texto separadas por vírgula"
              />
            </div>

            <Button type="submit" className="w-full">
              Carregar Video <UploadIcon className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <Separator />

          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="">Modelo</Label>
              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5"> GPT 3.5-Turbo 16km</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic">
                Você poderá customizar essa opção em brece
              </span>
            </div>

            <Separator />

            <div className="space-y-4">
              <Label>Temperatura</Label>
              <Slider min={0} max={1} step={0.1}></Slider>
              <span className="block text-xs text-muted-foreground italic leading-relexed">
                Valores mais altos geram textos mais criativos e com possíveis
                erros
              </span>
            </div>

            <Separator />

            <Button type="submit" className="w-full">
              Execultar
              <MagicWandIcon className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  )
}
