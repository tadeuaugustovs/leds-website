"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Maximize } from "lucide-react"

interface VideoPlayerProps {
  videoId: string
  className?: string
}

export default function VideoPlayer({ videoId, className = "" }: VideoPlayerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      <div className={`relative group ${className}`}>
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&muted=1&background=1`}
          className="w-full h-full rounded-lg"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />

        {/* Botão para abrir modal */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
          <Button
            variant="secondary"
            size="sm"
            onClick={openModal}
            className="bg-white/80 hover:bg-white text-gray-800"
          >
            <Maximize className="h-4 w-4 mr-2" />
            Ver em Tela Cheia
          </Button>
        </div>
      </div>

      {/* Modal para vídeo em tela cheia */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-6xl w-full h-[80vh] bg-black/95 border-0 p-0">
          <div className="relative w-full h-full flex items-center justify-center">
            <iframe
              src={`https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1`}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
